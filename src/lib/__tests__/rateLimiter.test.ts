import { describe, it, expect, beforeEach } from 'vitest';
import { RateLimiter } from '../rateLimiter';

describe('RateLimiter', () => {
  let rateLimiter: RateLimiter;

  beforeEach(() => {
    // Create a new rate limiter instance for each test
    rateLimiter = new RateLimiter({
      maxAttempts: 3,
      windowMs: 5 * 60 * 1000, // 5 minutes for testing
      blockDurationMs: 2 * 60 * 1000, // 2 minutes for testing (shorter for testing)
    });
  });

  it('should allow requests within the limit', () => {
    const ip = '192.168.1.1';
    
    // First request should be allowed
    const result1 = rateLimiter.checkRateLimit(ip);
    expect(result1.allowed).toBe(true);
    expect(result1.attemptsLeft).toBe(2);

    // Second request should be allowed
    const result2 = rateLimiter.checkRateLimit(ip);
    expect(result2.allowed).toBe(true);
    expect(result2.attemptsLeft).toBe(1);

    // Third request should be allowed
    const result3 = rateLimiter.checkRateLimit(ip);
    expect(result3.allowed).toBe(true);
    expect(result3.attemptsLeft).toBe(0);
  });

  it('should block requests after exceeding the limit', () => {
    const ip = '192.168.1.1';
    
    // Make 3 requests (the limit)
    for (let i = 0; i < 3; i++) {
      const result = rateLimiter.checkRateLimit(ip);
      expect(result.allowed).toBe(true);
    }

    // Fourth request should be blocked
    const result = rateLimiter.checkRateLimit(ip);
    expect(result.allowed).toBe(false);
    expect(result.remainingTime).toBeDefined();
  });

  it('should reset counter after window expires', () => {
    const ip = '192.168.1.1';
    
    // Make 3 requests to reach the limit
    for (let i = 0; i < 3; i++) {
      rateLimiter.checkRateLimit(ip);
    }

    // Should be blocked
    let result = rateLimiter.checkRateLimit(ip);
    expect(result.allowed).toBe(false);

    // Create a new rate limiter with a very short window to simulate expiry
    const shortWindowLimiter = new RateLimiter({
      maxAttempts: 3,
      windowMs: 100, // 100ms window
      blockDurationMs: 50, // 50ms block duration
    });

    // Make 3 requests to reach the limit
    for (let i = 0; i < 3; i++) {
      shortWindowLimiter.checkRateLimit(ip);
    }

    // Should be blocked
    result = shortWindowLimiter.checkRateLimit(ip);
    expect(result.allowed).toBe(false);

    // Wait for window to expire (100ms + buffer)
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Should be allowed again after window expires
        result = shortWindowLimiter.checkRateLimit(ip);
        expect(result.allowed).toBe(true);
        expect(result.attemptsLeft).toBe(2);
        resolve();
      }, 150);
    });
  });

  it('should handle different IPs independently', () => {
    const ip1 = '192.168.1.1';
    const ip2 = '192.168.1.2';
    
    // Make 3 requests from IP1
    for (let i = 0; i < 3; i++) {
      rateLimiter.checkRateLimit(ip1);
    }

    // IP1 should be blocked
    let result1 = rateLimiter.checkRateLimit(ip1);
    expect(result1.allowed).toBe(false);

    // IP2 should still be allowed
    let result2 = rateLimiter.checkRateLimit(ip2);
    expect(result2.allowed).toBe(true);
    expect(result2.attemptsLeft).toBe(2);
  });

  it('should reset rate limit for specific IP', () => {
    const ip = '192.168.1.1';
    
    // Make 3 requests to reach the limit
    for (let i = 0; i < 3; i++) {
      rateLimiter.checkRateLimit(ip);
    }

    // Should be blocked
    let result = rateLimiter.checkRateLimit(ip);
    expect(result.allowed).toBe(false);

    // Reset the IP
    rateLimiter.reset(ip);

    // Should be allowed again
    result = rateLimiter.checkRateLimit(ip);
    expect(result.allowed).toBe(true);
    expect(result.attemptsLeft).toBe(2);
  });
});

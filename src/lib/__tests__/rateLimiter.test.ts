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

  it('should allow only one request', () => {
    const ip = '192.168.1.1';
    
    // First request should be allowed (only attempt)
    const result1 = rateLimiter.checkRateLimit(ip);
    expect(result1.allowed).toBe(true);
    expect(result1.attemptsLeft).toBe(0);

    // Second request should block the user immediately
    const result2 = rateLimiter.checkRateLimit(ip);
    expect(result2.allowed).toBe(false);
    expect(result2.remainingTime).toBeDefined();
  });

  it('should block requests after the single attempt', () => {
    const ip = '192.168.1.1';
    
    // First request should be allowed (only attempt)
    const result1 = rateLimiter.checkRateLimit(ip);
    expect(result1.allowed).toBe(true);
    expect(result1.attemptsLeft).toBe(0);

    // Second request should block immediately
    const result2 = rateLimiter.checkRateLimit(ip);
    expect(result2.allowed).toBe(false);
    expect(result2.remainingTime).toBeDefined();

    // Third request should also be blocked
    const result3 = rateLimiter.checkRateLimit(ip);
    expect(result3.allowed).toBe(false);
    expect(result3.remainingTime).toBeDefined();
  });

  it('should reset counter after window expires', () => {
    const ip = '192.168.1.1';
    
    // First request should be allowed (only attempt)
    const result1 = rateLimiter.checkRateLimit(ip);
    expect(result1.allowed).toBe(true);
    expect(result1.attemptsLeft).toBe(0);

    // Second request should block
    const result2 = rateLimiter.checkRateLimit(ip);
    expect(result2.allowed).toBe(false);

    // Create a new rate limiter with a very short window to simulate expiry
    const shortWindowLimiter = new RateLimiter({
      maxAttempts: 1,
      windowMs: 100, // 100ms window
      blockDurationMs: 50, // 50ms block duration
    });

    // First request should be allowed (only attempt)
    const result3 = shortWindowLimiter.checkRateLimit(ip);
    expect(result3.allowed).toBe(true);
    expect(result3.attemptsLeft).toBe(0);

    // Second request should block
    const result4 = shortWindowLimiter.checkRateLimit(ip);
    expect(result4.allowed).toBe(false);

    // Wait for window to expire (100ms + buffer)
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Should be allowed again after window expires
        const result5 = shortWindowLimiter.checkRateLimit(ip);
        expect(result5.allowed).toBe(true);
        expect(result5.attemptsLeft).toBe(0);
        resolve();
      }, 150);
    });
  });

  it('should handle different IPs independently', () => {
    const ip1 = '192.168.1.1';
    const ip2 = '192.168.1.2';
    
    // First request from IP1 should be allowed (only attempt)
    const result1 = rateLimiter.checkRateLimit(ip1);
    expect(result1.allowed).toBe(true);
    expect(result1.attemptsLeft).toBe(0);

    // Second request from IP1 should block it
    const result2 = rateLimiter.checkRateLimit(ip1);
    expect(result2.allowed).toBe(false);

    // IP2 should still be allowed (only attempt)
    const result3 = rateLimiter.checkRateLimit(ip2);
    expect(result3.allowed).toBe(true);
    expect(result3.attemptsLeft).toBe(0);
  });

  it('should reset rate limit for specific IP', () => {
    const ip = '192.168.1.1';
    
    // First request should be allowed (only attempt)
    const result1 = rateLimiter.checkRateLimit(ip);
    expect(result1.allowed).toBe(true);
    expect(result1.attemptsLeft).toBe(0);

    // Second request should block
    const result2 = rateLimiter.checkRateLimit(ip);
    expect(result2.allowed).toBe(false);

    // Reset the IP
    rateLimiter.reset(ip);

    // Should be allowed again (only attempt)
    const result3 = rateLimiter.checkRateLimit(ip);
    expect(result3.allowed).toBe(true);
    expect(result3.attemptsLeft).toBe(0);
  });

});

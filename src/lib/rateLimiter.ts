/**
 * IP-based rate limiting utility for contact form submissions
 * Prevents spam and abuse by limiting submissions per IP address
 */

interface RateLimitEntry {
  count: number;
  firstAttempt: number;
  lastAttempt: number;
  blocked: boolean;
}

interface RateLimitConfig {
  maxAttempts: number; // Maximum attempts allowed
  windowMs: number; // Time window in milliseconds
  blockDurationMs: number; // How long to block after exceeding limit
}

  // Default rate limiting configuration
  const DEFAULT_CONFIG: RateLimitConfig = {
    maxAttempts: 1, // Allow only 1 attempt (block on 2nd)
    windowMs: 15 * 60 * 1000, // 15 minutes window
    blockDurationMs: 24 * 60 * 60 * 1000, // Block for 24 hours after exceeding limit
  };

class RateLimiter {
  private entries: Map<string, RateLimitEntry> = new Map();
  private config: RateLimitConfig;

  constructor(config: Partial<RateLimitConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    
    // Clean up old entries every 5 minutes
    setInterval(() => this.cleanup(), 5 * 60 * 1000);
  }

  /**
   * Check if an IP address is allowed to make a request
   * @param ip - IP address to check
   * @returns Object with allowed status and remaining time if blocked
   */
  checkRateLimit(ip: string): { allowed: boolean; remainingTime?: number; attemptsLeft?: number } {
    const now = Date.now();
    const entry = this.entries.get(ip);

    // If no entry exists, create one
    if (!entry) {
      this.entries.set(ip, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now,
        blocked: false,
      });
      return { allowed: true, attemptsLeft: this.config.maxAttempts - 1 };
    }

    // Check if currently blocked
    if (entry.blocked) {
      const timeSinceBlock = now - entry.lastAttempt;
      if (timeSinceBlock < this.config.blockDurationMs) {
        return { 
          allowed: false, 
          remainingTime: this.config.blockDurationMs - timeSinceBlock 
        };
      } else {
        // Unblock and reset
        entry.blocked = false;
        entry.count = 0;
        entry.firstAttempt = now;
        entry.lastAttempt = now;
      }
    }

    // Check if within time window
    const timeSinceFirst = now - entry.firstAttempt;
    if (timeSinceFirst > this.config.windowMs) {
      // Reset counter if outside window
      entry.count = 1;
      entry.firstAttempt = now;
      entry.lastAttempt = now;
      return { allowed: true, attemptsLeft: this.config.maxAttempts - 1 };
    }

    // Check if within attempt limit
    if (entry.count < this.config.maxAttempts) {
      entry.count++;
      entry.lastAttempt = now;
      
      // If this exceeds the limit (2nd attempt), block immediately
      if (entry.count > this.config.maxAttempts) {
        entry.blocked = true;
        return { 
          allowed: false, 
          remainingTime: this.config.blockDurationMs 
        };
      }
      
      // This is the 1st and only allowed attempt
      return { 
        allowed: true, 
        attemptsLeft: 0 // No more attempts after this
      };
    }

    // Exceeded limit - block the IP
    entry.blocked = true;
    entry.lastAttempt = now;
    return { 
      allowed: false, 
      remainingTime: this.config.blockDurationMs 
    };
  }

  /**
   * Block an IP address after successful email sending
   * @param ip - IP address to block
   */
  blockAfterSuccess(ip: string): void {
    const entry = this.entries.get(ip);
    if (entry) {
      entry.blocked = true;
      entry.lastAttempt = Date.now();
    } else {
      // Create new entry and block it
      this.entries.set(ip, {
        count: this.config.maxAttempts,
        firstAttempt: Date.now(),
        lastAttempt: Date.now(),
        blocked: true,
      });
    }
  }

  /**
   * Get client IP address from various sources
   * Note: This is a simplified version for client-side detection
   * In production, you'd want server-side IP detection
   */
  getClientIP(): string {
    // For client-side applications, we'll use a combination of factors
    // to create a unique identifier since we can't get the real IP
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Create a pseudo-IP based on browser fingerprint
    // In a real application, you'd get this from your backend
    const fingerprint = btoa(`${userAgent}-${language}-${timezone}`).substring(0, 16);
    return `client-${fingerprint}`;
  }

  /**
   * Clean up old entries to prevent memory leaks
   */
  private cleanup(): void {
    const now = Date.now();
    const maxAge = Math.max(this.config.windowMs, this.config.blockDurationMs) * 2;
    
    for (const [ip, entry] of this.entries.entries()) {
      const age = now - entry.firstAttempt;
      if (age > maxAge) {
        this.entries.delete(ip);
      }
    }
  }

  /**
   * Get current rate limit status for an IP
   */
  getStatus(ip: string): RateLimitEntry | null {
    return this.entries.get(ip) || null;
  }

  /**
   * Reset rate limit for a specific IP (useful for testing)
   */
  reset(ip: string): void {
    this.entries.delete(ip);
  }

  /**
   * Get all current entries (useful for debugging)
   */
  getAllEntries(): Map<string, RateLimitEntry> {
    return new Map(this.entries);
  }
}

// Create a singleton instance
const rateLimiter = new RateLimiter();

export default rateLimiter;
export { RateLimiter, type RateLimitConfig, type RateLimitEntry };

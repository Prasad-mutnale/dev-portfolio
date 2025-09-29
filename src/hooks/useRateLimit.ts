import { useState, useCallback } from 'react';
import rateLimiter from '../lib/rateLimiter';

interface RateLimitState {
  isAllowed: boolean;
  remainingTime?: number;
  attemptsLeft?: number;
  isBlocked: boolean;
}

/**
 * Custom hook for managing rate limiting in contact form
 * Provides rate limit checking and user feedback
 */
export const useRateLimit = () => {
  const [rateLimitState, setRateLimitState] = useState<RateLimitState>({
    isAllowed: true,
    isBlocked: false,
  });

  /**
   * Check if the current user can submit the form
   * @returns Promise<boolean> - true if allowed, false if rate limited
   */
  const checkRateLimit = useCallback(async (): Promise<boolean> => {
    try {
      const clientIP = rateLimiter.getClientIP();
      const result = rateLimiter.checkRateLimit(clientIP);
      
      setRateLimitState({
        isAllowed: result.allowed,
        remainingTime: result.remainingTime,
        attemptsLeft: result.attemptsLeft,
        isBlocked: !result.allowed,
      });

      return result.allowed;
    } catch (error) {
      console.error('Rate limit check failed:', error);
      // If rate limiting fails, allow the request (fail open)
      setRateLimitState({
        isAllowed: true,
        isBlocked: false,
      });
      return true;
    }
  }, []);

  /**
   * Block the current user after successful email sending
   */
  const blockAfterSuccess = useCallback(() => {
    try {
      const clientIP = rateLimiter.getClientIP();
      rateLimiter.blockAfterSuccess(clientIP);
      
      setRateLimitState({
        isAllowed: false,
        isBlocked: true,
        remainingTime: 24 * 60 * 60 * 1000, // 24 hours
      });
    } catch (error) {
      console.error('Failed to block after success:', error);
    }
  }, []);

  /**
   * Format remaining time for display
   */
  const formatRemainingTime = useCallback((ms: number): string => {
    const minutes = Math.floor(ms / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    
    if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    }
    return `${seconds}s`;
  }, []);

  /**
   * Get user-friendly error message for rate limiting
   */
  const getRateLimitMessage = useCallback((): string => {
    if (!rateLimitState.isBlocked) return '';
    
    if (rateLimitState.remainingTime) {
      const timeStr = formatRemainingTime(rateLimitState.remainingTime);
      return `Rate limit has reached. Please try again in ${timeStr}.`;
    }
    
    return 'Rate limit has reached. Please try again after 24 hours.';
  }, [rateLimitState, formatRemainingTime]);

  /**
   * Reset rate limit state (useful for testing or manual reset)
   */
  const resetRateLimit = useCallback(() => {
    const clientIP = rateLimiter.getClientIP();
    rateLimiter.reset(clientIP);
    setRateLimitState({
      isAllowed: true,
      isBlocked: false,
    });
  }, []);

  return {
    rateLimitState,
    checkRateLimit,
    blockAfterSuccess,
    formatRemainingTime,
    getRateLimitMessage,
    resetRateLimit,
  };
};

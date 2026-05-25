type RateLimitRecord = {
  lastRequestTime: number;
  requestsInWindow: number;
  windowStartTime: number;
};

// Global in-memory cache, persistent across hot function executions
const rateLimitMap = new Map<string, RateLimitRecord>();

/**
 * Prunes expired entries from the rate limit cache with a 1% chance per call.
 * This avoids memory leaks without requiring a persistent background timer.
 */
function pruneCache() {
  const now = Date.now();
  if (Math.random() < 0.01) {
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now - record.windowStartTime > 60000 && now - record.lastRequestTime > 3000) {
        rateLimitMap.delete(ip);
      }
    }
  }
}

/**
 * Checks if the request from the given IP address is within the acceptable limits.
 * - Debouncing: Minimum 3 seconds interval between consecutive requests.
 * - Rate Limiting: Maximum 5 requests per 60-second window.
 */
export function checkRateLimit(ip: string): { success: boolean; error?: string } {
  pruneCache();

  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, {
      lastRequestTime: now,
      requestsInWindow: 1,
      windowStartTime: now,
    });
    return { success: true };
  }

  // 1. Debouncing Check (Minimum 3 seconds between requests)
  const timeSinceLastRequest = now - record.lastRequestTime;
  if (timeSinceLastRequest < 3000) {
    return {
      success: false,
      error: "Please wait a moment before submitting again.",
    };
  }

  // 2. Window-based Rate Limiting (Max 5 requests per 60 seconds)
  const timeSinceWindowStart = now - record.windowStartTime;
  if (timeSinceWindowStart > 60000) {
    // Reset window
    record.windowStartTime = now;
    record.requestsInWindow = 1;
    record.lastRequestTime = now;
    return { success: true };
  } else {
    if (record.requestsInWindow >= 5) {
      return {
        success: false,
        error: "Too many requests. Please try again after a minute.",
      };
    }
    record.requestsInWindow += 1;
    record.lastRequestTime = now;
    return { success: true };
  }
}

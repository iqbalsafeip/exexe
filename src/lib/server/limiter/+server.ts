// src/lib/server/rateLimiter.ts
// Simple token-bucket per API key. Use Redis for multi-instance.
type Bucket = {
  tokens: number;
  lastRefill: number;
};

const BUCKETS = new Map<string, Bucket>();

/**
 * limit: number tokens per windowSeconds
 */
export function checkRateLimit(key: string, limit = 30, windowSeconds = 60) {
  const now = Date.now();
  const bucket = BUCKETS.get(key) ?? { tokens: limit, lastRefill: now };
  // refill
  const elapsed = (now - bucket.lastRefill) / 1000;
  if (elapsed > 0) {
    const refill = (elapsed / windowSeconds) * limit;
    bucket.tokens = Math.min(limit, bucket.tokens + refill);
    bucket.lastRefill = now;
  }
  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    BUCKETS.set(key, bucket);
    return { allowed: true, remaining: bucket.tokens };
  } else {
    return { allowed: false, remaining: 0, retryAfter: windowSeconds };
  }
}

/*
  For production with multiple server instances, replace with Redis:
  - use a Lua script to atomically check & decrement tokens
*/



// live paused
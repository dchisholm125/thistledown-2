// Simple in-memory rate limiter for Netlify functions
export class RateLimiter {
  private requests: Map<string, number[]> = new Map()
  constructor(
    private windowMs: number = 60000, // 1 minute
    private maxRequests: number = 5
  ) {}

  isAllowed(ip: string): boolean {
    const now = Date.now()
    const userRequests = this.requests.get(ip) || []
    // Clean old requests
    const validRequests = userRequests.filter(time => now - time < this.windowMs)
    if (validRequests.length >= this.maxRequests) {
      this.requests.set(ip, validRequests)
      return false
    }
    validRequests.push(now)
    this.requests.set(ip, validRequests)
    return true
  }

  addRequest(ip: string): void {
    const now = Date.now()
    const userRequests = this.requests.get(ip) || []
    const validRequests = userRequests.filter(time => now - time < this.windowMs)
    validRequests.push(now)
    this.requests.set(ip, validRequests)
  }

  getRequestCount(ip: string): number {
    const now = Date.now()
    const userRequests = this.requests.get(ip) || []
    return userRequests.filter(time => now - time < this.windowMs).length
  }

  getTimestamps(ip: string): number[] {
    const now = Date.now()
    return (this.requests.get(ip) || []).filter(time => now - time < this.windowMs)
  }
}

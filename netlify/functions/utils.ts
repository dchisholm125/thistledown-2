// Centralized logging utility for monitoring function usage
export function logFunctionCall(functionName: string, event: any, additionalData?: any) {
    const logData = {
        function: functionName,
        timestamp: new Date().toISOString(),
        ip: event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown',
        userAgent: event.headers['user-agent'] || 'unknown',
        method: event.httpMethod,
        ...additionalData
    }
    
    console.log(`FUNCTION_CALL: ${JSON.stringify(logData)}`)
    return logData
}

// Rate limiting helper
export class RateLimiter {
    private requests: Map<string, number[]> = new Map()
    
    constructor(
        private windowMs: number = 60000, // 1 minute
        private maxRequests: number = 5
    ) {}
    
    isAllowed(identifier: string): boolean {
        const now = Date.now()
        const userRequests = this.requests.get(identifier) || []
        
        // Clean old requests
        const validRequests = userRequests.filter(time => now - time < this.windowMs)
        
        if (validRequests.length >= this.maxRequests) {
            this.requests.set(identifier, validRequests)
            return false
        }
        
        validRequests.push(now)
        this.requests.set(identifier, validRequests)
        return true
    }
    
    cleanup() {
        const now = Date.now()
        for (const [key, requests] of this.requests.entries()) {
            const validRequests = requests.filter(time => now - time < this.windowMs)
            if (validRequests.length === 0) {
                this.requests.delete(key)
            } else {
                this.requests.set(key, validRequests)
            }
        }
    }
}

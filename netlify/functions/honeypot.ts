// Honeypot function to detect bots hitting endpoints directly
export const handler = async (event) => {
    // Log suspicious activity
    console.log('Honeypot triggered:', {
        ip: event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown',
        userAgent: event.headers['user-agent'] || 'unknown',
        method: event.httpMethod,
        path: event.path,
        timestamp: new Date().toISOString()
    })
    
    // Return a generic response
    return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Not found' })
    }
}

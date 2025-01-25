require('dotenv').config()

export const handler = async (event) => {

    const parsedBody = JSON.parse(event.body)
    // return blogs list;
    console.log(parsedBody.msgBody)

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    
    async function createMessage() {
      const message = await client.messages.create({
        body: parsedBody.msgBody,
        from: "+18888285693",
        to: parsedBody.phoneNum,
      });
    
      console.log(message.body);

      return message
    }

    const returned = createMessage()
    
    return {
        statusCode: 200,
        body: JSON.stringify({ response: returned}),
    }

}

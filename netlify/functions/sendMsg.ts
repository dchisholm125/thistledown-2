require('dotenv').config()
import twilio from 'twilio';

export const handler = async (event) => {

    let retId
    twilio.

    const parsedBody = JSON.parse(event.body)
    // return blogs list;
    console.log(parsedBody.msgBody)

    const accountSid = process.env.TWILIO_ACCOUNT;
    const authToken = process.env.TWILIO_TOKEN;
    const client = twilio(accountSid, authToken);

    try {
        client.messages
        .create({
            body: parsedBody.msgBody,
            from: '+18888285693',
            to: parsedBody.phoneNum + ', '
        })
        .then((message: any) => retId = message); 

        return {
            statusCode: 200,
            body: JSON.stringify({ response: retId}),
        }
    } catch(error){
        return {
            statusCode: 500,
            body: JSON.stringify({ response: error}),
        }
    }

}

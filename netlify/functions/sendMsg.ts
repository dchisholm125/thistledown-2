import twilio from 'twilio';

export const handler = async (event) => {

    const parsedBody = JSON.parse(event.body)
    // return blogs list;
    console.log(parsedBody.msgBody)

    const accountSid = process.env.TWILIO_ACCOUNT;
    const authToken = process.env.TWILIO_TOKEN;
    const client = twilio(accountSid, authToken);
    client.messages
        .create({
            body: parsedBody.msgBody?.toString(),
            from: '+18888285693',
            to: parsedBody.phoneNum?.toString() + ', '
        })
        .then((message: any) => console.log(message.sid));
}

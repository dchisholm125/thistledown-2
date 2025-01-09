import twilio from 'twilio';

export default defineEventHandler((event) => {
    // return blogs list;
    console.log(getQuery(event).msgBody)

    const accountSid = process.env.TWILIO_ACCOUNT;
    const authToken = process.env.TWILIO_TOKEN;
    const client = twilio(accountSid, authToken);
    client.messages
        .create({
            body: getQuery(event).msgBody?.toString(),
            from: '+18888285693',
            to: getQuery(event).phoneNum?.toString() + ', '
        })
        .then((message: any) => console.log(message.sid));
  });

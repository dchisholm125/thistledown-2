require('dotenv').config()

const client = require('twilio')(process.env.TWILIO_ACCOUNT, process.env.TWILIO_TOKEN);

exports.handler = function(event, context, callback) {

  const parsedBody = JSON.parse(event.body)

  Promise.all(
    // split the string of several messages into single numbers
    // send message to each of them
    parsedBody.phoneNum.split(';').map(num => {
      return client.messages.create({
        from: "+18888285693",
        to: num,
        body: parsedBody.msgBody,
      });
    })
  )
    .then(() => callback(null, { statusCode: 200, body: 'Created' }))
    .catch(e => {
      console.log(e);
      callback(e);
    });
};

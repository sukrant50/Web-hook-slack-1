require('dotenv').config()
const { IncomingWebhook } = require('@slack/webhook');
const url = process.env.SLACK_URL;
const webhook = new IncomingWebhook(url);

// (async () => {
//     await webhook.send({
//       text: 'I\'ve got news for you...',
//     });
//     console.log("done");
//   })();

const webhookTest = async () => {
    
    try {
    console.log('Sending slack message');
      const slackResponse = await webhook.send({
        text: "Test",
        icon_emoji: ':hubspot:',
        attachments: [{
            color: '#8697db',
            fields: [
                {
                    title: "Test ",
                    value: "Testing Slack Channel"
                }
            ]
        }]
    });
      console.log('Message response', slackResponse);
    } catch (e) {
      console.error('There was a error with the request', e);
    }
  };

  webhookTest();

  
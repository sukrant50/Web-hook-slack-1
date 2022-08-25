const { IncomingWebhook } = require('@slack/webhook');
const url = "https://hooks.slack.com/services/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";
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

  
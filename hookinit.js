const { IncomingWebhook } = require('@slack/webhook');
const url = "https://hooks.slack.com/services/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";
const webhook = new IncomingWebhook(url);

// (async () => {
//     await webhook.send({
//       text: 'I\'ve got news for you...',
//     });
//     console.log("done");
//   })();

(async function () {
    console.log('Sending slack message');
    try {
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
  })();

  
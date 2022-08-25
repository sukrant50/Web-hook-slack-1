// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
const message = event.body;
response = {
    'statusCode': 200,
    'body': JSON.stringify({
        message: 'Hello Sukrant This is a test slack/lambda',
    })
}

webhookTest(message); 

return response
};

async function webhookTest(message) {
    const { IncomingWebhook } = require('@slack/webhook');
    const url = "https://hooks.slack.com/services/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";
    const webhook = new IncomingWebhook(url);
    
    try {
        // const slackResponse = null;
        console.log('Sending slack message:', message);
        webhook.send({
            text: message
        });
            
    //   console.log('Message response:', slackResponse);
    //   if (slackResponse == null){
    //     webhookTest();
    //   }
    } catch (e) {
        // console.log("error")
        // webhookTest();
      console.error('There was a error with the request', e);
    }
  };


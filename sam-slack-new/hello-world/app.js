// import hubspotFunc from "./hubspotHandler"
const hubspot = require('./hubspotHandler')
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
  const { IncomingWebhook } = require("@slack/webhook");
  const url = ""
  const webhook = new IncomingWebhook(url);

  const message2 = JSON.parse(message);
  const fName = message2.fName
  const lName = message2.lName
  const email = message2.email
  const slackID = message2.slackID
  const action = message2.action;
  console.log("the values are : ", fName,lName,email,slackID,action)



  try {
    const slackMessage = "<@"+slackID+"> /n"+" The user "+fName+" "+lName+" with email "+email+" performed action: "+action;
    console.log("Sending slack message:", message);
    await webhook.send({
      text: slackMessage
    });
    
  } catch (e) {
    console.error("There was a error with the request", e);
  }
  response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello Sukrant This is a test slack/lambda",
    }),
  };

  const properties = {
    email: email,
    firstname: fName,
    lastname: lName,
    lifecyclestage: action,
  };
  
  

  hubspotFunc(properties);

  return response;
};

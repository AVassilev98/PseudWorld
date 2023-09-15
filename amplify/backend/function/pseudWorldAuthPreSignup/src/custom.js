const { error } = require('console');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const secretKey = "DepLoveParadise"

exports.handler = async (event, context) => {

  if (event.request.userAttributes.secretKey !== secretKey)
  {
    var error = new Error("Incorrect secret key!");
    callback(error, event);
  }

  event.response.autoConfirmUser = true;
  // Set the email as verified if it is in the request
  if (event.request.userAttributes.hasOwnProperty("email")) {
    event.response.autoVerifyEmail = true;
  }

  // Set the phone number as verified if it is in the request
  if (event.request.userAttributes.hasOwnProperty("phone_number")) {
    event.response.autoVerifyPhone = true;
  }

  return event;
};

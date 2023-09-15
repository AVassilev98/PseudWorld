exports.handler = (event, context, callback) => {
  
  const secretKey = "DepLoveParadise";
  
  if (!event.request.userAttributes.hasOwnProperty("custom:secretKey") ||
      event.request.userAttributes["custom:secretKey"] !== secretKey)
  {
    var error = new Error("Incorrect secret key");
    callback(error, event);
  }
  
  event.response.autoConfirmUser = true;
  
  if (event.request.userAttributes.hasOwnProperty("email")) {
    event.response.autoVerifyEmail = true;
  }
  
  if (event.request.userAttributes.hasOwnProperty("phone_number")) {
    event.response.autoVerifyPhone = true;
  }

  callback(null, event);
};

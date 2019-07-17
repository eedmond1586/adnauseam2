  var TeleSignSDK = require('telesignsdk');

  const customerId = "5C9FE087-E993-45DD-B1D6-4561E1EC6A45";
  const apiKey = "ikP3IGQGFW2creZKn8V7b+fjPmGdjPN/A6wGMvEWH4vqF3p7Pjj4b7nfVxNtNWyHHz23wiczRX8AgTRVQdrAYw==";
  const rest_endpoint = "https://rest-api.telesign.com";
  const timeout = 10*1000; // 10 secs

  const client = new TeleSignSDK( customerId,
      apiKey,
      rest_endpoint,
      timeout // optional
      // userAgent
  );

  const phoneNumber = "14056422696";
  const message = "You're scheduled for a dentist appointment at 2:30PM.";
  const messageType = "ARN";

  console.log("## MessagingClient.message ##");

  function messageCallback(error, responseBody) {
      if (error === null) {
          console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
              ` => code: ${responseBody['status']['code']}` +
              `, description: ${responseBody['status']['description']}`);
      } else {
          console.error("Unable to send message. " + error);
      }
  }
  client.sms.message(messageCallback, phoneNumber, message, messageType);
  

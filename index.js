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
  const phoneTypeVOIP = "5";

  console.log("## PhoneIDClient.phoneID ##");

  function messageCallback(error, responseBody) {
      if (error === null) {
          console.log(`PhoneID response for phone number: ${phoneNumber}` +
              ` => code: ${responseBody['status']['code']}` +
              `, description: ${responseBody['status']['description']}`);

          if (responseBody['status']['code'] === 200) {
              if (responseBody['phone_type']['code'] === phoneTypeVOIP) {
                  console.log("Phone type in request is VOIP");
              } else {
                  console.log("Phone type in request is not VOIP");
              }
          }
      } else {
          console.error("Unable to get PhoneID. " + error);
      }
  }
  client.phoneid.phoneID(messageCallback, phoneNumber);
  

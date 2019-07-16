
  var TeleSignSDK = require('telesignsdk');

  const customerId = "5C9FE087-E993-45DD-B1D6-4561E1EC6A45";
  const apiKey = "ikP3IGQGFW2creZKn8V7b+fjPmGdjPN/A6wGMvEWH4vqF3p7Pjj4b7nfVxNtNWyHHz23wiczRX8AgTRVQdrAYw==";
  const rest_endpoint = "https://rest-api.telesign.com";
  const timeout = 10*1000; // 10 secs

  const client = new TeleSignSDK( customerId,
      apiKey,

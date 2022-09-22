var { google } = require("googleapis");

// Load the service account key JSON file.
var serviceAccount = require("path/to/serviceAccountKey.json");

// Specify the required scope.
var scopes = [
  "https://www.googleapis.com/auth/firebase"
];

// Authenticate a JWT client with the service account.
var jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  scopes
);

// Use the JWT client to generate an access token.
jwtClient.authorize(function(error, tokens) {
  if (error) {
    console.log("Error making request to generate access token:", error);
  } else if (tokens.access_token === null) {
    console.log("Provided service account does not have permission to generate access tokens");
  } else {
    var accessToken = tokens.access_token;
       // Include the access token in the Authorization header.
  }
});
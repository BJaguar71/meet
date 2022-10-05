const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");

/**
 *  SCOPES allows you to set access levels; this is set to readonly for now because you don't have access rights to
 */
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

// credentials
const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris: [
    "https://bjaguar71.github.io/meet/"
  ],
  javascript_origins: [
    "https://bjaguar71.github.io",
    "https://localhost:3000"
  ],
};

const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);


module.exports.getAuthURL = async () => {


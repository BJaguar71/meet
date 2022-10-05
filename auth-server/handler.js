const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");

/**
 *  SCOPES allows you to set access levels; this is set to readonly for now because you don't have access rights to
 */
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];


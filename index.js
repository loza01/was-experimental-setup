const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/welcome-page')
});

app.post('/instructions', function(req, res) {
  res.render('pages/instructions')
});

app.post('/privacy', function(req, res) {
  res.render('pages/privacy')
});

app.post('/questions', function(req, res) {
  res.render('pages/questions')
});

app.post('/submit', function(req, res) {
  var data = req.body;
  var parsedData = [];

  parsedData = parseData(data);

  uploadDataToSpreadSheet(parsedData);
  res.render('pages/thank-you')
});

app.listen(PORT, function() {
  console.log(`Listening on ${ PORT }`);
});

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = 'token.json';

function parseData(data) {
  var preprocessedData = Object.entries(data);
  var processedData = [];

  for (data of preprocessedData) {
    processedData.push(data[1].toString());
  }

  return processedData;
}

function uploadDataToSpreadSheet(data) {


  // Load client secrets from a local file.
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Sheets API.
    authorize(JSON.parse(content), appendToFile, data);
  });
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback, data) {
  const client_secret = credentials["web"]["client_secret"];
  const client_id = credentials["web"]["client_id"];
  const redirect_uris = credentials["web"]["redirect_uris"];

  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, data);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function appendToFile(auth, data) {
  const sheets = google.sheets({version: 'v4', auth});
  const spreadsheetId = "17rj-vZ-4-sETwwhC6aT7kTiQlaJo50qa22SUz2Kjj6Y";
  const range = "A:AN";
  const valueInputOption = "RAW";

  let values = [
      data
  ];

  const resource = {
    values,
  };

  sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption,
    resource,
  }, (err, result) => {
    if (err) {
      // Handle error
      console.log(err);
    } else {
      console.log('%d cells updated.', result.updatedCells);
    }
  });
}
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
  res.render('pages/welcome-page');
});

app.post('/instructions', function(req, res) {
  var accept = req.body["accept"];
  var reject = req.body["reject"];

  if (reject == "0") {
    res.redirect("/");
  } else {
    res.render('pages/instructions');
  }
});

app.post('/privacy', function(req, res) {
  res.render('pages/privacy')
});

app.post('/questions', function(req, res) {
  res.render('pages/questions')
});

app.post('/submit', function(req, res) {
  var data = req.body;
  var preProcessedData = Object.entries(data);
  var parsedData = [];

  for (d of preProcessedData) {
    console.log(d[1]);
    if (d[1] == "NotCorrect") {
      return;
    }
  }

  parsedData = parseData(data);

  uploadDataToSpreadSheet(parsedData);
  res.render('pages/thank-you')
});

app.listen(PORT, function() {
  console.log(`Listening on ${ PORT }`);
});

// If modifying these scopes, delete token.json.
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
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
async function authorize(credentials, callback, data) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: SCOPES
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({version: "v4", auth: client});
  callback(googleSheets, data);
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function appendToFile(sheets, data) {
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
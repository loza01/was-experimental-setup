const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');

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
  console.log(req.body);
  res.render('pages/thank-you')
});

app.listen(PORT, function() {
  console.log(`Listening on ${ PORT }`);
});

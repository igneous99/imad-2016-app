var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-1', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'Article-1.html'));
});

app.get('/Article-2', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'Article-2.html'));
});

app.get('/Article-3', function (req, res){
  res.send('This is article 3');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

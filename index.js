var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/api/sample.json', function (req, res) {
  var items = req.query.items.split(',');
  var i = parseInt(Math.random() * items.length);  
  res.json({winner: items[i], index: i});
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});

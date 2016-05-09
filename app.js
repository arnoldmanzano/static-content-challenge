var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/:id', function(req, res) {
  fs.readFile('content/' + req.params.id + '/index.md', 'utf8', function (err,data) {
      res.render('template', {content: data});
    });
});

app.listen(8000);

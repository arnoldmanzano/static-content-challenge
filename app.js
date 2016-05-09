var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var marked = require('marked');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/:id', function(req, res) {
  fs.readFile('content/' + req.params.id + '/index.md', 'utf8', function (err,data) {
    if (err) {
      res.status(404).send('Page not found');
    }
    else {
      var dataParsed = marked(data);
      res.render('template', {content: dataParsed});
    }
  });
});

app.listen(8000);

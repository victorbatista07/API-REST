var express = require('express');
var app = express();

app.get('/teste/:name', function (req, res, next) {
  res.json({ "user" :  req.params.name, "x": req.query.x});
  next();
});

app.listen(3008);

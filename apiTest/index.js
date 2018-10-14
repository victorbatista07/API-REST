var express = require('express');
var app = express();
//user = {name, x}
//app.get('/teste/name', function(req, res, name){
//    res.send(name);
//})

app.param(['nome', 'x'], function (req, res, next, key, value) {
  res.json({ user: 'tobi' });
  req.is('application/json');
 console.log(value);
  next();
});

app.get('/teste/:name', function (req, res, next) {
  res.json({ "user" :  req.params.name });
  console.log("name");
  console.log("name");
  next();
});

app.listen(3008);

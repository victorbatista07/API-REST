var express = require('express');
var app = express();

app.get('/teste/:name', function (req, res, next) {
  res.json({ "user" :  req.params.name, "x": req.query.x});
  next();
});

app.get('/map', function(req, res, next){
  const createMapper = require("map-factory");
  const mapper = createMapper();

  var src = {
    "nome" : "Teste",
    "x" : {
      "y" : 123,
      "k" : "oi",
    },
    "z" : [456]
  };

  mapper.map("nome").to("name")
  mapper.map("x.y").to("y")
  mapper.map("z").to("z.teste")
  mapper.map("x.k").to("z.eita")

  var result = mapper.execute(src);
  res.send(result);
  next();
});

app.use(function (req, res, next) {
  var now = new Date();
  console.log("Data:", now.toLocaleDateString(), "Horas:", now.toLocaleTimeString(), "status code:", res.statusCode, "rota:", req.originalUrl);
  next();
});

app.listen(3008);

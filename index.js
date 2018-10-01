const restify = require('restify');
const plugins = require('restify-plugins');

const server = restify.createServer();

server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.bodyParser());

server.post('/sum', (req, res, next) => {
	res.send(200, req.body.reduce((a, b) => a + b, 0));
	return next();
});

server.listen(8080);

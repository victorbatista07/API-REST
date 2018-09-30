const restify = require('restify');
const plugins = require('restify-plugins');

require('dotenv').config()

const server = restify.createServer();

server.use(plugins.acceptParser(server.acceptable));
server.use(plugins.bodyParser());

server.post('/soma', (req, resp, next) => {
	res.send(200, req.body.reduce((a,b) => a + b, 0));
	return next();
});

server.listen(process.env.RESTIFY_SERVER_PORT);

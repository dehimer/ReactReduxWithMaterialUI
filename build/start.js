const http = require('http');
const express = require('express');
const app = express();


// console.log(process.env);

(function initWebpack() {
  	const webpack = require('webpack');
	const webpackConfig = require('./../webpack/common.config.js');
	const compiler = webpack(webpackConfig);
	// console.log(webpackConfig);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: false, publicPath: webpackConfig.output.publicPath,
	}));

	app.use(require('webpack-hot-middleware')(compiler, {
		log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
	}));

	app.use(express.static(__dirname + '/client'));
})();


app.get(/.*/, function root(req, res) {

	//form html of start page

  	res.sendFile(__dirname + '/client/pm.html');
});

/*const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  	const address = server.address();
  	console.log('Listening on: %j', address);
  	console.log(' -> that probably means: http://localhost:%d', address.port);
});


const io = require('socket.io')(server);
*/

// socket.io events
const server = new http.Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT);

io.on('connection', (socket) => {
  const req = socket.request;
  const ip = forwarded(req, req.headers);
  debug('client ip %s', ip);

  playerBatch.subscribe((playerbatch) => {
    socket.emit('mappy:playerbatch', playerbatch);
  });
});
const http = require('http');
const express = require('express');
const app = express();



app.use(express.static(__dirname + '/client'));


app.get(/.*/, function root(req, res) {
  	res.sendFile(__dirname + '/client/pm.html');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function onListen() {
  	const address = server.address();
  	console.log('Listening on: %j', address);
  	console.log(' -> that probably means: http://localhost:%d', address.port);
});



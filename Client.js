var net = require("net");
var client = new net.Socket();

client.connect (3000, "127.0.0.1", function () {
	console.log("Connected");
	client.write("Message 1");
	client.write("Message 2");
})

client.on ('data', function (data) {
	console.log("Received:" + data);
})

client.on ('close', function () {
	console.log("Connection closed");
})



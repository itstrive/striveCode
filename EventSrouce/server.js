const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	let filename = '.' + req.url;

	if (filename == './stream') {
		res.writeHead(200, {
			"Content-Type": "text/event-stream",
			"Cache-Control": "no-cache",
			"Connection": "keep-alive",
			"Access-Control-Allow-Origin": "*"
		});

		res.write("retry:10000\n");
		res.write("event: connecttime\n");
		res.write("data:" + (new Date()) + "\n\n");
		res.write("data:" + (new Date()) + "\n\n");

		let timer = setInterval(() => {
			res.write("data:" + (new Date()) + "\n\n");
		}, 1000);

		req.connection.addListener("close", () => {
			console.log('客户端关闭');
			clearInterval(timer);
		}, false);

	} else {
		let rs = fs.createReadStream('client.html');
		rs.pipe(res);
	}
}).listen(8088);
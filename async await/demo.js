const fs = require('fs');

function getFile1() {
	return new Promise(function(resolve, reject) {
		resolve(fs.readFileSync('a.txt'));
	});
}

function getFile2() {
	return new Promise(function(resolve, reject) {
		resolve(fs.readFileSync('b.txt'));
	});
}

async function show() {
	let data1 = await getFile1();
	let data2 = await getFile2();
	console.log(data1.toString());
	console.log(data2.toString());
}

show();
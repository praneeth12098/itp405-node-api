const fs = require('fs');

function doSomethingAysnc(callbackFunction) {
	fs.readFile('hello.txt', { encoding: 'utf8' }, function(error, contents) {
		callbackFunction(contents);
	});
}

console.log(1);
doSomethingAysnc(function(contents) {
	console.log(contents)
});
console.log(2);
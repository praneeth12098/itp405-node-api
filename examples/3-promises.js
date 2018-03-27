const fs = require('fs');

function doSomethingAysnc(/*callbackFunction*/) {
	// fs.readFile('hello.txt', { encoding: 'utf8' }, function(error, contents) {
	// 	callbackFunction(contents);
	// });
	return new Promise(function(resolve, reject) {
		fs.readFile('hello.txt', { encoding: 'utf8' }, function(error, contents) {
			// callbackFunction(contents);
			if(error) {
				reject(error);
			} else {
				resolve(contents);
			}
		});
	});
}

console.log(1);
// doSomethingAysnc(function(contents) {
// 	console.log(contents)
// });
doSomethingAysnc()
	.then(function() {
		//success
		console.log('File Contents: ', contents);
	}, function() {
		//error
		console.error('There was an error!', error);
		throw error;
	})
	.then(function() {
		console.log('yayyyyy');
	}, function() {
		console.error('bummer');
	});
console.log(2);
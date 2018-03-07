function hello(name) {
	console.log('Hello, ' + name);
}

// let hello = function(name) {
// 	console.log('Hello, ' + name);
// }

hello('Praneeth');

function a(callbackFunction) {
	callbackFunction();
}

a(function() {
	console.log('hi');
});
function doSomethingAsync(callbackFunction) {
	setTimeout(function() {
		callbackFunction();
	}, 1500);
	// callbackFunction();
}


console.log(1);
doSomethingAsync(function() {
	console.log(3);
});
console.log(2);
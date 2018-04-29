const express = require('express');
const knex = require('knex');
const connect = require('./connect');
const app = express();

const User = require('./models/User');

app.get('/users', function(request, response) {
	User.fetchAll().then(function(users) {
		response.json(users);
	}, function() {
		response.status(404).json({
			error: 'Something went wrong when finding users'
		});
	});
});

app.get('/users/:id', function(request, response) {
	let u_id = request.params.id;
	let user = new User({ id: u_id });
	user.fetch().then(function(user) {
		if(!user) {
			throw new Error();
		} else {
			response.json(user);
		}
	}).then(null, function() {
		response.status(404).json({
			error: `User ${u_id} not found`
		});
	});
});

app.delete('users/:id', function(request, response) {
	let u_id = request.params.id;
	let user = new User({ id: u_id });

	user.destroy().then(function(user) {
		if(user) {
			response.status(204).send();
		}
	}).catch(function(error) {
		response.status(404).json({
			error: `Track ${id} not found`
		});
	});
});

const port = process.env.PORT || 8000;

app.listen(port, function() {
	console.log('Listening on port: ' + port);
});
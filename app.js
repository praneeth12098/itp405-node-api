const express = require('express');
const knex = require('knex');

const app = express();


app.get('/genres', function(request, response) {
	let connection = connect();

	// select all from genres table
	// 3 states of promises: pending state, resolved (success) state, rejected (error) state
	let promise = connection.select().from('genres');
	// pending
	promise.then(function(genres) {
		// success
		// if successful it will receive the data which is why we pass in genres
		response.json(genres);
	}, function() {
		//error
		response.json({
			error: 'Something went wrong when finding genres'
		});
	});
});


app.get('/genres/:id', function(request, response) {
	let connection = connect();

	let id = request.params.id;

	let promise = connection.select()
							.from('genres')
							.where('GenreId', id)
							.first();

	promise.then(function(genre) {
		response.json(genre);
	}, function() {
		response.json({
			error: 'Cannot find genre ' + id
		});
	});
});

function connect() {
	let connection = knex({
		client: 'sqlite3',
		connection: {
			filename: './database.sqlite'
		}
	});

	return connection;
}

const port = process.env.PORT || 8000;

app.listen(port, function() {
	console.log('Listening on port: ' + port);
});
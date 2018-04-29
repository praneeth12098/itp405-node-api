const knex = require('knex');

function connect() {
	let connection = knex({
		client: 'sqlite3',
		connection: {
			filename: './db.sqlite'
		}
	});

	return connection;
}

module.exports = connect;
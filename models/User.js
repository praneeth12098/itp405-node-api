let bookshelf = require('bookshelf');
const connect = require('./../connect');
bookshelf = bookshelf(connect());

const User = bookshelf.Model.extend({
	tableName: 'users',
	idAttribute: 'id'
});

module.exports = User;
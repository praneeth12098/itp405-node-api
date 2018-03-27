let bookshelf = require('bookshelf');
const connect = require('./../connect');
bookshelf = bookshelf(connect());

const Genre = bookshelf.Model.extend({
	tableName: 'genres',
	idAttribute: 'GenreId'
});

module.exports = Genre;
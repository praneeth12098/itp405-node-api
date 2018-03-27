let bookshelf = require('bookshelf');
const connect = require('./../connect');
bookshelf = bookshelf(connect());

const Track = bookshelf.Model.extend({
	tableName: 'tracks',
	idAttribute: 'TrackId'
});

module.exports = Track;
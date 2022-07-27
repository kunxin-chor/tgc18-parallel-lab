// One Model Class represents one table
const bookshelf = require('../bookshelf');

// Convention:
// * Name of the Model must be first alphabet upper case and singular
// * first argument to bookshelf.Model is the NAME of the model
const Poster = bookshelf.model('Poster',{
    'tableName':'posters'
})

module.exports = {
    Poster
};
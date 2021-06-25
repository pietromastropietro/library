var mongoose = require('mongoose');
var Schema = mongoose.Schema;

GenreSchema = new Schema({
    name: { type: String, minLength: 3, maxLength: 100, required: true },
});

// Virtual for genre's URL
GenreSchema.virtual('url').get(function () {
    return `/catalog/genre/${this._id}`
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
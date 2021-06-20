var mongoose = require('mongoose');
var Schema = mongoose.Schema;

BookInstanceSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: { type: String, required: true },
    status: { type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance' },
    due_back: { type: Date, default: Date.now }
});

//Export model
BookInstanceSchema.virtual('url').get(
    () => '/catalog/bookinstance/' + this._id
);

//Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);
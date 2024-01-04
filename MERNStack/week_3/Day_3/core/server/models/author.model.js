const mongoose = require('mongoose');

const Authors = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} Must Be At least 3 characters Long "],
        minlength: [3, "{PATH} Must Be At least 3 characters Long"],
    }
}, { timestamps: true });

const Author = mongoose.model('Authors', Authors);

module.exports = Author;



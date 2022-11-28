const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
	image_url: { type: String, default: [] },
});

module.exports = mongoose.model('Category', categorySchema);
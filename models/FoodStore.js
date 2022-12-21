const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');
var foodstoreSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String },
    address: { type: String },
    description: { type: String },
    image_url: { type: String, default: [] },
});
// mongoose.plugin(slug);
module.exports = mongoose.model('foodstore', foodstoreSchema);
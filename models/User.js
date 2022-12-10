const mongoose = require('mongoose'); // Erase if already required

var userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    role: { type: String, default: 'user' },
    cart: { type: Array, default: [] }
});

//Export the model
module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const credentials = require('../credentials')
mongoose.connect(credentials.CONNECTION_STRING, {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

const cloudinary = require("cloudinary");
const credentials = require("../credentials");
cloudinary.config({
    cloud_name: credentials.CLOUD_NAME,
    api_key: credentials.API_KEY,
    api_secret: credentials.API_SECRET
});
module.exports = cloudinary
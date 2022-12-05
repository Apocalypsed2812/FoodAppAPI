const Auth = require('./auth.js')
const User = require('./user.js')
const Product = require('./product.js')
const Category = require('./category.js')
const FoodStore = require('./foodstore.js')
const Order = require('./order.js')

function route(app) {
    app.use('/api', Auth)
    app.use('/api', User)
    app.use('/api/product', Product)
    app.use('/api/category', Category)
    app.use('/api/foodstore', FoodStore)
    app.use('/api/order', Order)
}

module.exports = route
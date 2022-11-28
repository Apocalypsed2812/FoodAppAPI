const express = require('express')
const router = express.Router()

const UserController = require('../controlers/UserController.js')
const checkLoginUser = require('../midlewares/checkLoginUser')

router.get('/get-user', checkLoginUser, UserController.getUserData)
router.post('/add-to-cart', checkLoginUser, UserController.addProductToCart)
router.post('/change-quantity', checkLoginUser, UserController.changeQuantity)
router.post('/delete-product', checkLoginUser, UserController.deleteProduct)

module.exports = router
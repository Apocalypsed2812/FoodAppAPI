const express = require('express')
const router = express.Router()

const UserController = require('../controlers/UserController.js')
const checkLoginUser = require('../midlewares/checkLoginUser')
const checkLoginAdmin = require('../midlewares/checkLoginAdmin')

// router.get('/get-all-user', UserController.getAllUserData)
// router.get('/get-all-user', checkLoginAdmin, UserController.getAllUserData)
router.get('/get-user', checkLoginUser, UserController.getUserData)
router.post('/add-to-cart', checkLoginUser, UserController.addProductToCart)
router.post('/change-quantity', checkLoginUser, UserController.changeQuantity)
router.post('/delete-product', checkLoginUser, UserController.deleteProduct)
router.post('/change-info', checkLoginUser, UserController.changeInfo)

module.exports = router
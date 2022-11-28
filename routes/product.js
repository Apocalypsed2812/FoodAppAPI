const express = require('express')
const router = express.Router()

const ProductController = require('../controlers/ProductController.js')
const checkLoginUser = require('../midlewares/checkLoginUser')

router.get('/', ProductController.getProduct)
router.get('/:id', ProductController.getProductBuyId)
router.post('/delete', ProductController.deleteProduct)
router.post('/add', ProductController.addProduct)
router.post('/update', ProductController.updateProduct)

module.exports = router
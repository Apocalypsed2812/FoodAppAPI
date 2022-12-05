const express = require('express')
const router = express.Router()

const OrderController = require('../controlers/OrderController.js')
// const checkLoginUser = require('../midlewares/checkLoginUser')

router.get('/', OrderController.getOrder)
router.post('/add', OrderController.addOrder)
// router.get('/:id', ProductController.getProductBuyId)
// router.post('/delete', ProductController.deleteProduct)
// router.post('/update', ProductController.updateProduct)

module.exports = router
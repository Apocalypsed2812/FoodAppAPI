const express = require('express')
const router = express.Router()

const OrderController = require('../controlers/OrderController.js')
// const checkLoginUser = require('../midlewares/checkLoginUser')

router.get('/', OrderController.getOrder)
router.post('/add', OrderController.addOrder)
router.post('/update', OrderController.updateOrder)
// router.get('/:id', ProductController.getProductBuyId)
// router.post('/delete', ProductController.deleteProduct)

module.exports = router
const express = require('express')
const router = express.Router()

const CategoryController = require('../controlers/CategoryController.js')
const checkLoginUser = require('../midlewares/checkLoginUser')

router.get('/', CategoryController.getCategory)
router.post('/add', CategoryController.addCategory)
router.post('/delete', CategoryController.deleteCategory)
router.post('/update', CategoryController.updateCategory)
// router.post('/update', CategoryController.updateCategory)

module.exports = router
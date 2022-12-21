const express = require('express')
const router = express.Router()

const FoodStoreController = require('../controlers/FoodStoreController.js')
const checkLoginUser = require('../midlewares/checkLoginUser')

router.get('/', FoodStoreController.getFoodStore)
router.post('/username', FoodStoreController.getFoodStoreByUsername)
router.post('/add', FoodStoreController.addFoodStore)
router.post('/delete', FoodStoreController.deleteFoodStore)
router.post('/update', FoodStoreController.updateFoodStore)

module.exports = router
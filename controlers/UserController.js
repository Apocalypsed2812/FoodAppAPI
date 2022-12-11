const Product = require('../models/Product')
const User = require('../models/User')

class UserController {

    getUserData(req, res) {
        return res.json({ success: true, user: req.user })
    }

    // async getAllUserData(req, res) {
    //     let user = await User.find({}).lean();
    //     return res.json({ success: true, user })
    // }

    async addProductToCart(req, res) {
        try {
            const user = req.user
            let cart = user.cart
            let { product_id } = req.body
			let flag = false
            cart.forEach(item => {
                if (item.id === product_id){
                    flag = true
				}
            })
			if(flag){
				return res.json({ success: false, message: 'Product already add to cart' })
			}
            let product = await Product.findOne({ _id: product_id })
            if (!product)
                return res.json({ success: false, message: 'Product not found' })
            user.cart.push({ id: product_id, quantity: 1 })
            await user.save()
            return res.json({ success: true, message: 'Product added successfully', user })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }

    async changeQuantity(req, res) {
        try {
            const { product_id, handle } = req.body
            const user = await User.findOne({ _id: req.user._id }).select("-password")
            if (handle == "descrease") {
                // giam
                user.cart.forEach((item, index) => {
                    if (item.id == product_id) {
                        user.cart[index] = { ...user.cart[index], quantity: user.cart[index].quantity - 1 }
                    }
                })
            }
            if (handle === "inscrease") {
                user.cart.forEach((item, index) => {
                    if (item.id == product_id) {
                        user.cart[index] = { ...user.cart[index], quantity: user.cart[index].quantity + 1 }
                    }
                })
            }
            await user.save()
            return res.json({ success: true, user })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }

    async deleteProduct(req, res) {
        try {
            const { product_id } = req.body
            const user = await User.findOne({ _id: req.user._id }).select("-password")
            user.cart = user.cart.filter(item => item.id !== product_id)
            await user.save()
            return res.json({ success: true, user })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }

    async changeInfo(req, res){
        try {
            let { id, email, phone } = req.body
            await Product.findOneAndUpdate({ _id: id }, {phone, email})
            const user = await User.findOne({ _id: id })
            return res.json({ success: true, message: "Information User Updated", user })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
}

module.exports = new UserController();
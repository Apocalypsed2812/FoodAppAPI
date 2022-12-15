const Product = require("../models/Product")
var multiparty = require('multiparty');
const uploadImage = require("../lib/uploadImage")
class ProductController {
    async getProduct(req, res) {
        try {
            let products = await Product.find({status: 'Still'}).lean();
            return res.json({ success: true, products })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
    async getAllProduct(req, res) {
        try {
            let products = await Product.find({}).lean();
            return res.json({ success: true, products })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
    async getProductBuyId(req, res) {
        try {
            let { id } = req.params;
            let product = await Product.find({_id: id}).lean();
            return res.json({ success: true, product })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
    async addProduct(req, res) {
        try {
            var form = new multiparty.Form();
            form.parse(req, async function (err, fields, files) {
                if (err) return res.json({ success: false, message: err.message })
                let name = fields.name[0]
                let quantity = fields.quantity[0]
                let description = fields.description[0]
                let category = fields.category[0]
				let foodstore = fields.foodstore[0]
                let price = fields.price[0]
                let image_url = ""
                if (files.image) {
                    image_url = await uploadImage(files.image[0])
                }
                let data = { name, quantity, description, category, foodstore, price, image_url, status: "Still" }
                let product = new Product(data);
                try {
                    await product.save();
                } catch (err) {
                    console.log(err)
                }
                return res.json({ success: true, product })
            })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }

    async deleteProduct(req, res) {
        try {
            let { id } = req.body
            await Product.findOneAndDelete({ _id: id })
            return res.json({ success: true, message: "Product deleted" })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
	
	async updateProduct(req, res) {
        try {
            let { id, name, quantity, price, description, status } = req.body
            await Product.findOneAndUpdate({ _id: id }, { name, quantity, price, description, status })
            return res.json({ success: true, message: "Product updated" })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
}

module.exports = new ProductController();
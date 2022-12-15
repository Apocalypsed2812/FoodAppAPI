const FoodStore = require("../models/FoodStore")
const User = require('../models/User')
const bcrypt = require('bcrypt')
var multiparty = require('multiparty');
const uploadImage = require("../lib/uploadImage")

class FoodStoreController {
    async getFoodStore(req, res) {
        try {
            let foodStores = await FoodStore.find({}).lean();
            return res.json({ success: true, foodStores })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
    async addFoodStore(req, res) {
        try {
            var form = new multiparty.Form();
            form.parse(req, async function (err, fields, files) {
                if (err) return res.json({ success: false, message: err.message })
                let username = fields.username[0]
                let name = fields.name[0]
                let address = fields.address[0]
                let description = fields.description[0]
                let image_url = ""
                if (files.image) {
                    image_url = await uploadImage(files.image[0])
                }
                let data = { username, name, address, description, image_url }
                let foodStore = new FoodStore(data);
                let password = '123456789'
                const passwordHash = await bcrypt.hash(password, 10)
                let user = new User({username, password: passwordHash, role: 'foodstore'})
                try {
                    await foodStore.save();
                    await user.save();
                } catch (err) {
                    console.log(err)
                }
                return res.json({ success: true, foodStore })
            })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }

    async deleteFoodStore(req, res) {
        try {
            let { foodstore_id } = req.body
            await FoodStore.findOneAndDelete({ _id: foodstore_id })
            return res.json({ success: true, message: "FoodStore deleted" })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
	
	async updateFoodStore(req, res) {
        try {
			let { id, name, address, description } = req.body
			await FoodStore.findOneAndUpdate({ _id: id }, {name, address, description})
			return res.json({ success: true, message: "FoodStore updated" })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
}

module.exports = new FoodStoreController();
const FoodStore = require("../models/FoodStore")
var multiparty = require('multiparty');
const uploadImage = require("../lib/uploadImage");
const User = require("../models/User");
const bcrypt = require('bcrypt')

class FoodStoreController {
    async getFoodStore(req, res) {
        try {
            let foodStores = await FoodStore.find({}).lean();
            return res.json({ success: true, foodStores })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }

    async getFoodStoreByUsername(req, res){
        try {
            let { username } = req.body
            let foodStore = await FoodStore.findOne({username});
            return res.json({ success: true, foodStore })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }

    async addFoodStore(req, res) {
        try {
            var form = new multiparty.Form();
            form.parse(req, async function (err, fields, files) {
                if (err) return res.json({ success: false, message: err.message })
                let name = fields.name[0]
                let username = fields.username[0]
                let address = fields.address[0]
                let description = fields.description[0]
                let image_url = ""
                if (files.image) {
                    image_url = await uploadImage(files.image[0])
                }
                let data = { name, username, address, description, image_url }
                let foodStore = new FoodStore(data);
                let password = '123456789'
                const passwordHash = await bcrypt.hash(password, 10)
                let user = new User({username, password: passwordHash})
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
            let foodStores = await FoodStore.find({}).lean()
            return res.json({ success: true, message: "FoodStore deleted", foodStores })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
	
	async updateFoodStore(req, res) {
        try {
			let { id, name, address, description } = req.body
			await FoodStore.findOneAndUpdate({ _id: id }, {name, address, description})
            let foodStores = await FoodStore.find({}).lean()
			return res.json({ success: true, message: "FoodStore updated", foodStores })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
}

module.exports = new FoodStoreController();
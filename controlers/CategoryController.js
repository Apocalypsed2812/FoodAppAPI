const Category = require("../models/Category")
var multiparty = require('multiparty');
const uploadImage = require("../lib/uploadImage")
class CategoryController {
    async getCategory(req, res) {
        try {
            let categorys = await Category.find({}).lean();
            return res.json({ success: true, categorys })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
    async addCategory(req, res) {
        try {
            var form = new multiparty.Form();
            form.parse(req, async function (err, fields, files) {
                if (err) return res.json({ success: false, message: err.message })
                let name = fields.name[0]
                let image_url = ""
                if (files.image) {
                    image_url = await uploadImage(files.image[0])
                }
                let data = { name, image_url }
                let category = new Category(data);
                try {
                    await category.save();
                } catch (err) {
                    console.log(err)
                }
                return res.json({ success: true, category })
            })
		}catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }

    async deleteCategory(req, res) {
        try {
            let { category_id } = req.body
            await Category.findOneAndDelete({ _id: category_id })
            return res.json({ success: true, message: "Category deleted" })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
	
	async updateCategory(req, res) {
        try {
			let { id, name } = req.body
			await Category.findOneAndUpdate({ _id: id }, {name})
			return res.json({ success: true, message: "Category updated" })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }
}

module.exports = new CategoryController();
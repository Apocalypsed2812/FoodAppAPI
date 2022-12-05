const Order = require("../models/Order")

class OrderController {
    async getOrder(req, res) {
        try {
            let orders = await Order.find({}).lean();
            return res.json({ success: true, orders })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }

    async addOrder(req, res) {
        try {
            let {name, address, phone, product, total, date, user_id} = req.body
            let data = { name, address, phone, product: JSON.parse(product), total, date, user_id, status: 'Đang Giao' }
            let order = new Order(data);
            try {
                await order.save();
            } catch (err) {
                console.log(err)
            }
            return res.json({ success: true, order })
        } catch (err) {
            return res.json({ success: false, message: err.message })
        }
    }

    // async deleteOrder(req, res) {
    //     try {
    //         let { id } = req.body
    //         await Product.findOneAndDelete({ _id: id })
    //         return res.json({ success: true, message: "Product deleted" })
    //     } catch (err) {
    //         return res.json({ success: false, message: err.message })
    //     }
    // }
	
	// async updateOrder(req, res) {
    //     try {
    //         let { id, name, quantity, price, description } = req.body
    //         await Product.findOneAndUpdate({ _id: id }, {name, quantity, price, description})
    //         return res.json({ success: true, message: "Product updated" })
    //     } catch (err) {
    //         return res.json({ success: false, message: err.message })
    //     }
    // }
}

module.exports = new OrderController();
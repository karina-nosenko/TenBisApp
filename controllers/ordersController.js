const Order = require('../models/order');

exports.ordersController = {
    getOrders(req, res) {
        Order.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(`Error getting the data from db: ${err}`));
    },
    getOrder(req, res) {
        const orderId = req.params.id;
        Order.findOne({id: orderId})
            .then(docs => res.json(docs))
            .catch(err => console.log(`Error getting the data from db: ${err}`));
    },
    addOrder(req, res) {
        const { body } = req;
        const newOrder = new Order(body);
        const result = newOrder.save();

        if(result) {
            res.send('Order added successfully!')
        } else {
            res.status(404).send('Error saving an order');
        }
    },
    updateOrder(req, res) {
        const orderId = req.params.id;
        const { body } = req;
        Order.updateOne({id: orderId}, body)
            .then(() => res.send('Order updated successfully!'))
            .catch(err => console.log(`Error updating order from db: ${err}`));
    },
    deleteOrder(req, res) {
        const orderId = req.params.id;
        Order.deleteOne({id: orderId})
            .then(docs => res.send('Order deleted successfully'))
            .catch(err => console.log(`Error deleting order from db: ${err}`));
    }
}
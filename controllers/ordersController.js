const { orders } = require('../data/data');

exports.ordersController = {
    getOrders(req, res) {
        console.log('Get all orders');
        res.json(orders);
    },
    getOrder(req, res) {
        console.log('Get an order');
        const orderId = req.params.id;
        const order = orders.filter(order => order.id == orderId);
        res.json(order);
    },
    addOrder(req, res) {
        console.log('Add an order');
        const { body } = req;
        orders.push(body);
        res.json(orders);
    },
    updateOrder(req, res) {
        console.log('Update an order');
        const orderId = req.params.id;
        const orderIndex = orders.findIndex(order => order.id == orderId);
        orders.splice(orderIndex, 1);
        const { body } = req;
        orders.push(body);
        const order = orders.filter(order => order.id == orderId);
        res.json(order);
    },
    deleteOrder(req, res) {
        console.log('Delete an order');
        const orderId = req.params.id;
        const orderIndex = orders.findIndex(order => order.id == orderId);
        orders.splice(orderIndex, 1);
        res.json(orders);
    }
}
const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    id: { type: Number, index: 1 },
    price: Number,
    dishId: String, 
    restaurantId: Number,
}, { collection: 'order' });

const Order = model('Order', orderSchema);

module.exports = Order;


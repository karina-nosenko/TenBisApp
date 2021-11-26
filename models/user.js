const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: { type: Number, index: 1 },
    firstName: { type: String, required: true, default: 'John' },
    lastName: { type: String, required: true, default: 'Dow' },
    email: String,
    balance: Number,
    history: {
        orderId: Number, 
        date: String, 
    }
}, { collection: 'user' });

const User = model('User', userSchema);

module.exports = User;


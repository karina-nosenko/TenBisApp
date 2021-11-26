const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
    id: { type: Number, index: 1 },
    name: String,
    location: {
        lng: { type: Number }, 
        lat: { type: Number }, 
    },
    stars: Number
}, { collection: 'restaurant' });

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;


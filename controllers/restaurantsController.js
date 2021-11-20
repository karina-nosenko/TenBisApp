const { restaurants } = require('../data/data');

exports.restaurantsController = {
    getRestaurants(req, res) {
        console.log('Get all restaurants');
        res.json(restaurants);
    },
    getRestaurant(req, res) {
        console.log('Get a restaurant');
        const restaurantId = req.params.id;
        const restaurant = restaurants.filter(restaurant => restaurant.id == restaurantId);
        res.json(restaurant);
    },
    addRestaurant(req, res) {
        console.log('Add a restaurant');
        const { body } = req;
        restaurants.push(body);
        res.json(restaurants);
    },
    updateRestaurant(req, res) {
        console.log('Update a restaurant');
        const restaurantId = req.params.id;
        const restaurantIndex = restaurants.findIndex(restaurant => restaurant.id == restaurantId);
        restaurants.splice(restaurantIndex, 1);
        const { body } = req;
        restaurants.push(body);
        const restaurant = restaurants.filter(restaurant => restaurant.id == restaurantId);
        res.json(restaurant);
    },
    deleteRestaurant(req, res) {
        console.log('Delete a restaurant');
        const restaurantId = req.params.id;
        const restaurantIndex = restaurants.findIndex(restaurant => restaurant.id == restaurantId);
        restaurants.splice(restaurantIndex, 1);
        res.json(restaurants);
    }
}
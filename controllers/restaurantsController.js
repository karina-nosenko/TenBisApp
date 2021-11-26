const Restaurant = require('../models/restaurant');

exports.restaurantsController = {
    getRestaurants(req, res) {
        Restaurant.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(`Error getting the data from db: ${err}`));
    },
    getRestaurant(req, res) {
        const restaurantId = req.params.id;
        Restaurant.findOne({id: restaurantId})
            .then(docs => res.json(docs))
            .catch(err => console.log(`Error getting the data from db: ${err}`));
    },
    addRestaurant(req, res) {
        const { body } = req;
        const newRestaurant = new Restaurant(body);
        const result = newRestaurant.save();

        if(result) {
            res.send('Restaurant added successfully!')
        } else {
            res.status(404).send('Error saving a restaurant');
        }
    },
    updateRestaurant(req, res) {
        const restaurantId = req.params.id;
        const { body } = req;
        Restaurant.updateOne({id: restaurantId}, body)
            .then(() => res.send('Restaurant updated successfully!'))
            .catch(err => console.log(`Error updating restaurant from db: ${err}`));
    },
    deleteRestaurant(req, res) {
        const restaurantId = req.params.id;
        Restaurant.deleteOne({id: restaurantId})
            .then(docs => res.send('Restaurant deleted successfully!'))
            .catch(err => console.log(`Error deleting restaurant from db: ${err}`));
    }
}
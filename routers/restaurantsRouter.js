const { Router } = require('express');
const { restaurantsController } = require('../controllers/restaurantsController');

const restaurantsRouter = new Router();

restaurantsRouter.get('/', restaurantsController.getRestaurants);
restaurantsRouter.get('/:id', restaurantsController.getRestaurant);
restaurantsRouter.post('/', restaurantsController.addRestaurant);
restaurantsRouter.put('/:id', restaurantsController.updateRestaurant);
restaurantsRouter.delete('/:id', restaurantsController.deleteRestaurant);

module.exports = { restaurantsRouter };
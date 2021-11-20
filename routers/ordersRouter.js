const { Router } = require('express');
const { ordersController } = require('../controllers/ordersController');

const ordersRouter = new Router();

ordersRouter.get('/', ordersController.getOrders);
ordersRouter.get('/:id', ordersController.getOrder);
ordersRouter.post('/', ordersController.addOrder);
ordersRouter.put('/:id', ordersController.updateOrder);
ordersRouter.delete('/:id', ordersController.deleteOrder);

module.exports = { ordersRouter };
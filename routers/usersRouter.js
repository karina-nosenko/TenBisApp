const { Router } = require('express');
const { usersController } = require('../controllers/usersController');

const usersRouter = new Router();

usersRouter.get('/', usersController.getUsers);
usersRouter.get('/:id', usersController.getUser);
usersRouter.post('/', usersController.addUser);
usersRouter.put('/:id', usersController.updateUser);
usersRouter.delete('/:id',usersController.deleteUser);

module.exports = { usersRouter };
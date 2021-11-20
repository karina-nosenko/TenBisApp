const { users } = require('../data/data');

exports.usersController = {
    getUsers(req, res) {
        console.log('Get all users');
        res.json(users);
    },
    getUser(req, res) {
        console.log('Get a user');
        const userId = req.params.id;
        const user = users.filter(user => user.id == userId);
        res.json(user);
    },
    addUser(req, res) {
        console.log('Add a user');
        const { body } = req;
        users.push(body);
        res.json(users);
    },
    updateUser(req, res) {
        console.log('Update a user');
        const userId = req.params.id;
        const userIndex = users.findIndex(user => user.id == userId);
        users.splice(userIndex, 1);
        const { body } = req;
        users.push(body);
        const user = users.filter(user => user.id == userId);
        res.json(user);
    },
    deleteUser(req, res) {
        console.log('Delete a user');
        const userId = req.params.id;
        const userIndex = users.findIndex(user => user.id == userId);
        users.splice(userIndex, 1);
        res.json(users);
    }
}
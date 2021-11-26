const User = require('../models/user');

exports.usersController = {
    getUsers(req, res) {
        User.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(`Error getting the data from db: ${err}`));
    },
    getUser(req, res) {
        const userId = req.params.id;
        User.findOne({id: userId})
            .then(docs => res.json(docs))
            .catch(err => console.log(`Error getting the data from db: ${err}`));
    },
    addUser(req, res) {
        const { body } = req;
        const newUser = new User(body);
        const result = newUser.save();

        if(result) {
            res.send('User added successfully!')
        } else {
            res.status(404).send('Error saving a user');
        }
    },
    updateUser(req, res) {
        const userId = req.params.id;
        const { body } = req;
        User.updateOne({id: userId}, body)
            .then(() => res.send('User updated successfully!'))
            .catch(err => console.log(`Error updating user from db: ${err}`));
    },
    deleteUser(req, res) {
        const userId = req.params.id;
        User.deleteOne({id: userId})
            .then(docs => res.send('User deleted successfully'))
            .catch(err => console.log(`Error deleting user from db: ${err}`));
    }
}
/**
 * Created by qudrat on 06/12/16.
 */

var _ = require('underscore')._;

var users = [
    {
        "id": 1,
        "firstName": "Michael",
        "lastName": "Caine",
        "age": 23,
    },
    {
        "id": 2,
        "firstName": "Daniel",
        "lastName": "Craig",
        "age": 33,
    },
    {
        "id": 3,
        "firstName": "Kate",
        "lastName": "Winslet",
        "age": 27,
    }];

module.exports = {

    getList: function (req, res) {
        res.json(users);
        res.end();
    },

    getById: function (req, res) {
        var userId = req.params.id;
        var user = _.findWhere(users, {"id": parseInt(userId)});
        res.json(user);
        res.end();
    },

    addUser: function (req, res) {
        let id = req.body.id;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let age = req.body.age;
        users.push({
            "id": parseInt(id),
            "firstName": firstName,
            "lastName": lastName,
            "age": age,
        });
        res.json("Success!");
        res.end();
    },

    editUser: function (req, res) {
        let userId = req.params.id;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let age = req.body.age;
        _.each(users, function (user) {
            if(user.id == parseInt(userId)) {
                user.firstName = firstName;
                user.lastName = lastName;
                user.age = age;
            }
        });
        res.json("Success!");
        res.end();
    },

    deleteUser: function (req, res) {
        let userId = req.params.id;
        users = _.without(users, _.findWhere(users, {"id": parseInt(userId)}));
        res.json("Success!");
        res.end();
    }
};
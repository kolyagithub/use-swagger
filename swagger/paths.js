/**
 * Created by qudrat on 06/12/16.
 */

module.exports = {
    "/user/list": require('./api/user/list.json'),
    "/user/{id}/get": require('./api/user/getById.json'),
    "/user/add": require('./api/user/addUser.json'),
    "/user/{id}/edit": require('./api/user/editUser.json'),
    "/user/{id}/delete": require('./api/user/delUser.json')
};
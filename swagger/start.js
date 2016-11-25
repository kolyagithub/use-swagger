/**
 * Created by qudrat on 06/12/16.
 */

module.exports = {
    "swagger": "2.0",
    "info": {
        "description": "Swagger documentation",
        "version": "1.0.0",
        "title": "Swagger"
    },
    "host": "localhost:3002",
    "basePath": "/",
    "tags": require('./tags.js'),
    "schemes": [
        "http"
    ],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],
    "paths": require('./paths.js')
};
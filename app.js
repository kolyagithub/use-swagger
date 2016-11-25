/**
 * Created by qudrat on 06/12/16.
 */

const http = require('http')
    , express = require('express')
    , config = require('./config/config.json')
    , bodyParser = require('body-parser')
    , path = require('path')
    , route = require('./routes/route')
    , morgan = require('morgan');

var app = express();

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//logging
var logMorgan = morgan('common');

app.use('/', logMorgan, route);

// use swagger documentation
app.use('/swagger-ui', express.static(path.join(__dirname, './node_modules/swagger-ui/dist')));
app.use('/swagger-start', function (req, res) {
    res.json(require('./swagger/start.js'));
});
app.use('/doc', function (req, res) {
    res.redirect('/swagger-ui?url=/swagger-start');
});

var server = http.createServer(app);
server.listen(config.app.port, function () {
    console.info('Server listening on port %d ', config.app.port);
});
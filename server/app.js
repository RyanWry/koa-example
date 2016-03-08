/**
 * Created by ruiyuan on 16-2-17.
 */
'use strict';

const app = require('koa')();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/env');
const loggerMiddle = require('./util/logs');


global.log = loggerMiddle.logger;

//connect mongodb
mongoose.connect(config.mongo.uri);

const modelsPath = path.join(__dirname, 'model');
fs.readdirSync(modelsPath).forEach(function (file) {
    if (/(.*)\.(js$|coffee$)/.test(file)) {
        require(modelsPath + '/' + file);
    }
});

app.use(loggerMiddle());
require('./config/koa')(app);
require('./routes')(app);

app.listen(config.port, function () {
    console.log('Koa server listening on %d,in %s mode', config.port, config.env)
});

app.on('error', function (err, ctx) {
});
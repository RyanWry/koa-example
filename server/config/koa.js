/**
 * Created by ruiyuan on 16-2-18.
 */
'use strict';

const path = require('path');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const compress = require('koa-compress');
const logger = require('koa-logger');
const responseTime = require('koa-response-time');
const passport = require('koa-passport');

module.exports = function (app) {
    console.log(app.env)
    if (app.env === 'development') {
        app.use(logger());
    }

    app.use(bodyParser());
    app.use(json());
    app.use(passport.initialize());
    app.use(compress());
    app.use(responseTime());
};
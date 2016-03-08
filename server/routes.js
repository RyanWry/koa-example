/**
 * Created by ruiyuan on 16-2-18.
 */
'use strict';

const Router = require('koa-router')();
const AllRouter = require('koa-router')();
const auth = require('./auth');
const mutualAid = require('./api/mutual-aid');

module.exports = function (app) {
    Router.use('/auth', auth.routes(), auth.allowedMethods());
    Router.use('/mutualAid', mutualAid.routes(), mutualAid.allowedMethods());

    AllRouter.use('/rest/v1.0', Router.routes());

    app.use(AllRouter.routes());
};
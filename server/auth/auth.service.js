/**
 * Created by ruiyuan on 16-2-24.
 */
'use strict';

const mongoose = require('mongoose');
const passport = require('koa-passport');
const jwt = require('koa-jwt');
const config = require('../config/env');
const compose = require('koa-compose');
const User = mongoose.model('user');

function signToken(id) {
    return jwt.sign({_id: id}, config.session.secrets, {expiresIn: '7d'});
}

function authToken() {
    return compose([
        function *(next) {
            if (this.query && this.query.hasOwnproperty('access_token')) {
                this.headers.authorization = 'Bearer ' + this.query.access_token;
            }
            yield next;
        },
        jwt({secret: config.session.secrets, passthrough: true})
    ])
}

function isAuthenticated() {
    return compose([
        authToken(),
        function *(next) {
            if (!this.state.user) this.throw('UnauthorizedError', 401);
            yield next;
        },
        function *(next) {
            var user = yield User.findById(this.state.user._id);
            if (!user) this.throw('UnauthorizedError', 401)
            this.req.user = user;
            yield next;
        }
    ])
}


exports.signToken = signToken;
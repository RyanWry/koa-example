/**
 * Created by ruiyuan on 16-2-24.
 */
'use strict';

const mongoose = require('mongoose');
const router = require('koa-router')();
const passport = require('koa-passport');
const User = mongoose.model('user');
const Auth = require('../auth.service');

router.post('/', function *(next) {
    var ctx = this;
    yield passport.authenticate('local', function*(err, user, info) {
        if (err) ctx.throw(err);
        if (info) {
            ctx.status = 403;
            return ctx.body = info;
        }
        const token = Auth.signToken(user._id);
        ctx.body = {token: token};
    }).call(this, next)
});

module.exports = router;
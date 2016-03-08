/**
 * Created by ruiyuan on 16-2-24.
 */
'use strict';

const passport = require('koa-passport');
const co = require('co');
const LocalStrategy = require('passport-local').Strategy;
const logger = require('../../util/logs').logger;

exports.setup = function (User, config) {
    passport.use(new LocalStrategy({
            usernameField: 'mobilePhone',
            passwordField: 'userPassword'
        },
        function (mobilePhone, userPassword, done) {
            co(function *() {
                const user = yield User.findOne({mobilePhone: mobilePhone});
                if (!user) {
                    logger.error('登录用户名错误', {'username': mobilePhone});
                    return done(null, false, {error_msg: '用户名或密码错误.'});
                }
                if (!user.authenticate(userPassword)) {
                    logger.error('登录密码错误', {'username': mobilePhone});
                    return done(null, false, {error_msg: '用户名或密码错误.'});
                }
                return done(null, user);
            }).catch(function (err) {
                logger.debug('LocalStrategy error');
                return done(err);
            })
        }
    ))
};
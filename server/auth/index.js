/**
 * Created by ruiyuan on 16-2-24.
 */
'use strict';

const router = require('koa-router')();
const passport = require('koa-passport');
const config = require('../config/env');
const mongoose = require('mongoose');
const User = mongoose.model('user');

require('./local/passport').setup(User, config);

router.use('/local', require('./local').routes());

module.exports = router;
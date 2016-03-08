/**
 * Created by ruiyuan on 16-2-18.
 */
'use strict';

const router = require('koa-router')();
const controller = require('./mutual.controller');

router.get('/', controller.getMutualAidList);

module.exports = router;
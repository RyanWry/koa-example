/**
 * Created by ruiyuan on 16-2-17.
 */
'use strict';

var _ = require('lodash');
var path = require('path');

var all = {
    env: process.env.NODE_ENV,
    root: path.normalize(__dirname + '/../../..'),
    port: process.env.PORT || 4000,
    session: {
        secrets: 'redar-secret'
    }
};

var config = _.merge(all, require('./' + process.env.NODE_ENV + '.js') || {});

module.exports = config;
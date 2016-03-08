/**
 * Created by ruiyuan on 16-2-17.
 */
'use strict';

module.exports = {
    mongo: {
        uri: 'mongodb://66xiaoqu:123456@120.55.126.201:27017/66xiaoqu'
    },
    redis: {
        host: '120.55.126.201',
        port: '6389',
        password: 'VYNEIMmth3SmXCn4'
    },
    mysql: {
        host: '120.55.126.201',
        database: 'app',
        user: '66xiaoqu',
        password: 'jjker1314'
    },
    rabbitMq: {
        host: '120.55.126.201',
        login: 'admin',
        password: 'admin',
        vhost: '66xiaoqu'
    },
    solr: {
        host: '120.55.126.201',
        port: '8080'
    },
    qiniu: {
        accessKey: '-dRZnj4Njx9NmkIAZ6FsQRaBo8YO4U5aAKoZ_59u',
        secretKey: 'hMAAyn4T5Xgr9upi0fb6iNqi4V140zjjj0RgXdvq',
        bucket: 'img66'
    },
    duiba: {
        key: '2GGUXTp8PbYsZ35nfngQHnSikxwh',
        secret: '3Z5k5zGzCPPxVkb766hjaW2N5hrd'
    },
    huanxin: {
        grant_type: "client_credentials",
        client_id: "YXA60WgpwK3oEeSSepUqUDAw-g",
        client_secret: "YXA6FFuLRmtnIrqWT62PPvnNmtkytFQ",
        env: '66xiaoqudev'
    }
};
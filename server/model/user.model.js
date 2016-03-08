/**
 * Created by ruiyuan on 16-2-24.
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const md5 = require('md5');

var userMongoSchema = new Schema({
    userType: {
        type: String,
        enum: ['normalAppUser', 'talent', 'moderator', 'service'],
        default: 'normalAppUser'
    },
    userName: {type: String, unique: true, sparse: true},        //唯一，空值除外
    email: {type: String, unique: true, sparse: true},            //唯一，空值除外
    mobilePhone: {type: String, unique: true, sparse: true},     //唯一，空值除外
    huanxinUserName: {type: String, unique: true},                //唯一，不能为空，环信用户名
    thirdParty: [{
        id: String,
        platform: String,
        time: {type: Date, default: Date.now}
    }],
    userPassword: {type: String, required: true},                 //口令
    nickName: String,                                              //昵称
    frozenReason: String,
    images: [{imageURL: String}],
    maritalStatus: String,                                                     //婚姻状况
    hasChildren: {type: String, enum: ['Yes', 'No', '有', '无']},
    authenticationStatus: {type: Boolean, default: false},                 //认证状态
    school: String,                                                             //毕业院校
    birthDate: Date,                                                           //生日
    speciality: String,                                                        //擅长
    job: String,                                                                //工作
    hobbies:                                                                   //兴趣爱好
        [
            {type: Schema.Types.ObjectId, ref: 'masterData_Dictionaries'}    //关联到兴趣爱好的schema ID
        ],
    contactBook: [
        {type: Schema.Types.ObjectId, ref: 'user'}                              //通信录
    ],
    age: {type: Number, min: 10, max: 100},                                         //年龄
    gender: {type: String, enum: ['男', '女'], default: '女'},                 //性别
    community: {type: Schema.Types.ObjectId, ref: 'community'},               //所属小区
    cityId: {type: Schema.Types.ObjectId, ref: 'masterData_Regions'},
    communityWay: Number,                                                       //1,设置小区;2,随便逛逛
    apartmentDetail: String,                                                       //详细住址
    roomUnit: String,                                                               //单元
    roomNumber: String,                                                             //房号
    regChannelId: String,                                   //注册渠道id
    dateCreated: {type: Date, default: Date.now},
    dateLastModified: {type: Date, default: Date.now},
    invitationCode: String,
    invitedBy: {type: Schema.Types.ObjectId, ref: 'user'},
    openId: String,
    deviceId: String,
    loginWay: String,
    userRole: [{type: Number}],           //用户角色  1-版主 2-物业 3-雷锋团  4-创始人
    children: {
        gender: String,
        birthday: String
    }
});

userMongoSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.userPassword;
    },
    encryptPassword: function (password) {
        return md5(password);
    }
};

mongoose.model('user', userMongoSchema, 'user');
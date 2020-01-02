/* 
    论坛

*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ForumSchema = new Schema({
    type: {
        type: String, // 1 最新 2 精华
    },
    username: { // 用户名
        type: String,
        required: true,
    },
    picList: [], // 图片列表
    thumbup: { // 点赞数量
        type: Number,
    },
    reviews: [], // 评论列表
    avatar: { // 头像
        type: String, 
    },
    
});
const ForumModel = model('ForumModel', ForumSchema);
module.exports = ForumModel;

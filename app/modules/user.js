const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const UserSchema = new Schema({
    username: { // 用户名
        type: String,
        required: true
    },
    password: { // 密码
        type: String,
        required: true
    },
    phone: { // 手机号码
        type: String,
        required: true
    },
    orderList: [Schema.Types.ObjectId], // 订单列表
    avatar: String, // 头像
    level: Number, // 会员等级
    levelBonus: [] // 等级福利
});
const UserModel = model("UserModel", UserSchema);
module.exports = UserModel;

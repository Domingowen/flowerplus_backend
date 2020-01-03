/*
    优惠券
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;/*
    优惠券
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CouponSchema = new Schema({
    type: {
        // 状态
        type: String // 0, 未使用， 1 已使用  2 已过期
    },
    title: {
        // 标题
        type: String
    },
    note: {
        // 文字说明
        type: String
    },
    discount: {
        // 折扣 减多少钱
        type: Number
    },
    disccountStrategy: {
        // 折扣前提金额 满 50 减 20
        type: Number
    },
    expired: {
        // 优惠券过期日期时间
        type: Date,
        required: true
    },
    useOrderId: {
        // 使用的订单
        type: String
    },
    userId: [
        // 关联用户数据
        {
            type: Schema.Types.ObjectId,
            ref: "UserModel"
        }
    ]
});
const CouponModel = model('CouponModel', CouponSchema);
module.exports = CouponModel;

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CouponSchema = new Schema({
    type: { // 状态
        type: String, // 0, 未使用， 1 使用 
    },
    title: { // 标题
        type: String,
    },
    note: { // 文字说明
        type: String,
    },
    disccount: { // 折扣
        type: Number,
    },
    useOrderId: { // 使用的订单
        type: String,
    },
    userId: [ // 关联用户数据
        {
            type: Schema.Types.ObjectId,
            ref: 'UserModel'
        }
    ]
});
const CouponModel = model('CouponModel', CouponSchema);
module.exports = CouponModel;

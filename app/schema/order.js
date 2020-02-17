/* 
    订单列表
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const OrderSchema = new Schema({
    status: {
        type: Number
    }, // 订单状态 0 全部 1 生成订单 2 待付款 3 待发货 4 待收货 5 待评价 6 已取消 7 已删除
    title: {
        type: String
    }, // 订单标题
    number: {
        type: Number
    }, // 订单数量
    price: {
        type: Number
    }, // 订单价格
    deliveryFee: {
        type: Number
    }, //快递费
    totalPrice: {
        type: Number
    }, //总价
    expressStatus: {
        // 0 未发货 1 已发货 2 已收货
        type: Number
    }, //快递状态
    reviews: {
        type: String
    }, // 订单评论
    pic: {
        type: String
    }, // 订单图片
    productionId: {
        type: Schema.Types.ObjectId,
        ref: "ProductionModel"
    },
    discount: {
        // 折扣价
        type: Number,
        default: 0
    },
    skuId: {
        type: Schema.Types.ObjectId,
        ref: "ProductionSkuModel"
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "UserModel"
    },
    addressId: {
        type: Schema.Types.ObjectId,
        ref: "AddressModel"
    }
}, {
    timestamps: true
});
const OrderModel = model("OrderModel", OrderSchema);
module.exports = OrderModel;

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const OrderSchema = new Schema({
    status: {
        type: String
    }, // 订单状态 0 全部 1 待付款 2 待发货 3 待收货 4 待评价
    title: {
        type: String
    }, // 订单标题
    number: {
        type: String
    }, // 订单数量
    price: {
        type: String
    }, // 订单价格
    deliveryFee: {
        type: String
    }, //快递费
    totalPrice: {
        type: String
    }, //总价
    expressStatus: {
        type: String
    }, //快递状态
    reviews: {
        type: String
    }, // 订单评论
    pic: {
        type: String
    }, // 订单图片
    userId: {
        type: Schema.Types.ObjectId,
    }, // 对应的用户Id
});
const OrderModel = model("OrderModel", OrderSchema);
module.exports = OrderModel;

/*
    购物车
*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ShoppingCartSchema = new Schema({
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
    },
    title: {
        type: String
    }, // 标题
    number: {
        type: Number
    }, // 数量
    price: {
        type: Number
    }, // 价格
    deliveryFee: {
        type: Number
    }, //快递费
    totalPrice: {
        type: Number
    }, //总价
    pic: {
        type: String
    }, // 产品图片
    productionId: {
        type: Schema.Types.ObjectId,
        ref: "ProductionModel"
    },
    discount: {
        // 折扣价
        type: Number,
        default: 0
    },
});
const ShoppingCartModel = model("ShoppingCartModel", ShoppingCartSchema);
module.exports = ShoppingCartModel;

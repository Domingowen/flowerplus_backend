/*
    商品sku
*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductionSkuSchema = new Schema({
    skuId: {
        type: String,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "ProductionModel"
    },
    skuProperties: {
        // sku 对应的属性值
        type: String,
    },
    stock: {
        //库存
        type: Number
    },
    price: {
        // 价格
        type: Number,
    },
    originPrice: {
        // 原价
        type: Number
    }

    // attrId: [
    //     // 商品属性值
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "AttributeModel"
    //     }
    // ],
    // deliveryTime: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "AttributeModel"
    //     }
    // ]
});
const ProductionSkuModel = model("ProductionSkuModel", ProductionSkuSchema);

module.exports = ProductionSkuModel;

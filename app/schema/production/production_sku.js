/*
    商品sku
*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductionSkuSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "ProductionModel"
    },
    attrId: [
        // 商品属性值
        {
            type: Schema.Types.ObjectId,
            ref: "AttributeModel"
        }
    ],
    deliveryTime: [
        {
            type: Schema.Types.ObjectId,
            ref: "AttributeModel"
        }
    ],
    addOnItems: [
        // 购买附加物品
        {
            type: Schema.Types.ObjectId,
            ref: "AttributeModel"
        }
    ]
});
const ProductionSkuModel = model("ProductionSkuModel", ProductionSkuSchema);

module.exports = ProductionSkuModel;

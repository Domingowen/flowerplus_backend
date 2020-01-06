/* 
    产品属性值设置
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AttributeValueOptionSchema = new Schema({
    name: { // 名称
        type: String,
    },
    value: { // 值
        type: String,
    },
    image: { // 图片
        type: String,
    },
    // price: { // 价格
    //     type: Schema.Types.ObjectId,
    //     ref: 'AttributePriceModel'
    // },
    discountPrice: {
        // 折扣价
        type: Number,
        required: true
    },
    originalPrice: {
        // 原价
        type: Number,
        required: true
    },
    stock: { // 库存
        type: Number,
    }
});
const AttributeValueOptionModel = model("AttributeValueOptionModel", AttributeValueOptionSchema);

module.exports = AttributeValueOptionModel;


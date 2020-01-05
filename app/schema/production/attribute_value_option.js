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
    price: { // 价格
        type: Schema.Types.ObjectId,
        ref: 'AttributePriceModel'
    }
});
const AttributeValueOptionModel = model("AttributeValueOptionModel", AttributeValueOptionSchema);

module.exports = AttributeValueOptionModel;


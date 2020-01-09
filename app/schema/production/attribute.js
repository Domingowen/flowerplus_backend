/*
    产品属性设置
    产品的属性，如 订几个月 配送周期 颜色 尺寸
    
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const AttributeSchema = new Schema(
    {
        type: {
            // 属性类型
            type: Schema.Types.ObjectId,
            ref: "AttributeTypeModel"
        },
        name: {
            // 属性名
            type: String
        },
        attributeValueId: [
            // 属性值
            {
                type: Schema.Types.ObjectId,
                ref: "AttributeValueOptionModel"
            }
        ],
        attrId: {
            // 属性ID
            type: String
        },
        productId: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ProductionModel'
            }
        ]
    },
    {
        timestamps: true
    }
);
const AttributeModel = model("AttributeModel", AttributeSchema);

module.exports = AttributeModel;

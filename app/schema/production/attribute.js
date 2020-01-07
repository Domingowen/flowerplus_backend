/*
    产品属性设置
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
        haveAddOnItem: {
            // 是否是可加购
            type: Boolean
        },
    },
    {
        timestamps: true
    }
);
const AttributeModel = model("AttributeModel", AttributeSchema);

module.exports = AttributeModel;

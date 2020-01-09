/* 
    产品属性值设置
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AttributeValueOptionSchema = new Schema(
    {
        
        name: {
            // 名称
            type: String
        },
        image: {
            // 图片
            type: String
        },
        attrId: {
            // 属性ID
            type: String,
        },
        attrValId: {
            // 属性子ID
            type: String
        }
    },
    {
        timestamps: true
    }
);
const AttributeValueOptionModel = model("AttributeValueOptionModel", AttributeValueOptionSchema);

module.exports = AttributeValueOptionModel;

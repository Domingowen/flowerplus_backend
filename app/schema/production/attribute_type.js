/*
    产品属性类型设置
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const AttributeTypeSchema = new Schema({
    name: {
        type: String,
    },
});

const AttributeTypeModel = model('AttributeTypeModel', AttributeTypeSchema);
module.exports = AttributeTypeModel;



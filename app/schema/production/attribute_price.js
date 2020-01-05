/*
    产品属性价格设置
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AttributePriceSchema = new Schema({
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
});

const AttributePriceModel = model('AttributePriceModel',AttributePriceSchema );

module.exports = AttributePriceModel;


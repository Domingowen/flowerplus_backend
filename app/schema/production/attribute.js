/*
    产品属性
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AttributeSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'ProductionModel'
    },
    title: {
        type: String,
        required: true,
    },
    value: {
        
    },

});
const AttributeModel = model("AttributeModel", AttributeSchema);

module.exports = AttributeModel;

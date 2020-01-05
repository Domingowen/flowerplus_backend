/*
    商品sku
*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductionSkuSchema = new Schema({
    attrId: [{
        type: Schema.Types.ObjectId,
        ref: "AttributeModel"
    }],
    price: {
        type: Number,
    },

});
const ProductionSkuModel = model("ProductionSkuModel", ProductionSkuSchema);

module.exports = ProductionSkuModel;
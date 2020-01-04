/*
    商品sku
*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductionSkuSchema = new Schema({
    

});
const ProductionSkuModel = model("ProductionSkuModel", ProductionSkuSchema);

module.exports = ProductionSkuModel;
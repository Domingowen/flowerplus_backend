/*
    产品目录
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CatalogSchema = new Schema({

});

const CatalogModel = model("CatalogModel", CatalogSchema);
module.exports = CatalogModel;

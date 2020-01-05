/*
    产品类别
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CategorySchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "ProductionModel"
    },
    title: {
        type: String,
        required: true,
    },
    
});

const CategoryModel = model("CategoryModel", CategorySchema);
module.exports = CategoryModel;



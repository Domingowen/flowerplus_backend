/*
    产品轮播
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductionBannerSchema = new Schema({
    productId: [
        {
            type: Schema.Types.ObjectId,
            ref: "ProductionModel"
        }
    ],
    imgUrl: {
        type: String,
    }
});

const ProductionBannerModel = model("ProductionBannerModel", ProductionBannerSchema);
module.exports = ProductionBannerModel;

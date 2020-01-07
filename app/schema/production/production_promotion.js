/*
    产品促销政策
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductionPromotionSchema = new Schema({
    // productId: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "ProductionModel"
    //     }
    // ],
    label: {
        type: "String"
    },
    value: {
        type: "String"
    }
});

const ProductionPromotionModel = model("ProductionPromotionModel", ProductionPromotionSchema);
module.exports = ProductionPromotionModel;

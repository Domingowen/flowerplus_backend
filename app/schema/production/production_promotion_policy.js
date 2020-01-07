/*
    产品促销政策
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductionPromotionPolicySchema = new Schema({
    productId: [
        {
            type: Schema.Types.ObjectId,
            ref: "ProductionModel"
        }
    ],
    label: {
        type: "String"
    },
    value: {
        type: "String"
    }
});

const ProductionPromotionPolicyModel = model("ProductionPromotionPolicyModel", ProductionPromotionPolicySchema);
module.exports = ProductionPromotionPolicyModel;

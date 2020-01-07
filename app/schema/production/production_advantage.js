/*
    产品优势
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductionAdvantageSchema = new Schema({
    productId: [
        {
            type: Schema.Types.ObjectId,
            ref: "ProductionModel"
        }
    ],
    name: {
        type: "String"
    },
});

const ProductionAdvantageModel = model("ProductionAdvantageModel", ProductionAdvantageSchema);
module.exports = ProductionAdvantageModel;

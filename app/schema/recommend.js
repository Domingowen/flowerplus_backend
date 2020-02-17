/*
    推荐列表
*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const RecommendSchema = new Schema({
    title: {
        // 标题
        type: String
    },
    englishTitle: {
        // 英文标题
        type: String
    },
    productionId: [{
        // 产品ID
        type: Schema.Types.ObjectId,
        ref: "ProductionModel"
    }]
});
const RecommendModel = model("RecommendModel", RecommendSchema);
module.exports = RecommendModel;

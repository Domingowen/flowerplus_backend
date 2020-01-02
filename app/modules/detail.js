/*
    详情
*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DetailSchema = new Schema({
    productionId: {
        // 产品Id
        type: String,
        required: true
    },

    shareByUser: {
        // 用户分享
        type: Array
    }
});
const DetailModel = model("DetailModel", DetailSchema);
module.exports = DetailModel;

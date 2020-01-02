/*
    反馈
*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const FeedBackSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    },
    phone: {
        type: String,
    }
});
const FeedBackModel= model("FeedBackModel", FeedBackSchema);
module.exports = FeedBackModel;

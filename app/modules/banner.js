/*
    首页banner
*/
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BannerSchema = new Schema({
    picList: [
        {
            id: {
                type: String,
                required: true
            },
            pic: {
                type: String,
                required: true
            }
        }
    ]
});
const BannerModel = model("BannerModel", BannerSchema);
module.exports = BannerModel;


/*
    黑名单token： logout or change password token was been forbid
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BlockTokenListSchema = new Schema({
    token: {
        type:String,
        required: true
    }
});
const BlockTokenListModel = model('BlockTokenListModel',BlockTokenListSchema );
module.exports = BlockTokenListModel;
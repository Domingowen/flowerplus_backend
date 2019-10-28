const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const TokenBlockListSchema = new Schema(
    {
        token: {
            type: String
        }
    },
    { timestamps: true }
);

const TokenBlockListModel = new Model("TokenBlockList", TokenBlockListSchema);
module.exports = TokenBlockListModel;

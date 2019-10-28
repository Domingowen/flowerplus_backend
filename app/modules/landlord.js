/* 
    房东管理所有的内容
*/
const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const LandlordSchema = new Schema(
    {
        name: {
            type: String
        },
        phone: {
            type: Number
        },
        idCard: {
            type: String
        },
        paymentList: {
            // 付款方式
            type: [{ type: Schema.Types.ObjectId, ref: "Payment" }]
        },
        houseList: {
            // 房东旗下房屋
            type: [{ type: Schema.Types.ObjectId, ref: "House" }]
        }
    },
    { timestamps: true }
);

const LandlordModel = new Model("Landlord", LandlordSchema);
module.exports = LandlordModel;

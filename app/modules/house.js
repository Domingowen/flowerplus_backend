/* 
    创建房产
    
*/
const mongoose = require("mongoose");
const { Schema, Model } = mongoose;
const HouseSchema = new Schema(
    {
        name: {
            // 房子名称
            type: String
        },
        address: {
            // 详细地址
            type: String
        },
        houseType: {
            // 房屋类型
            type: String
        },
        paymentType: {
            // 付款方式
            type: [{ type: Schema.Types.ObjectId, ref: "Payment" }]
        },
        houseList: {
            // 这栋楼下的房间
            type: [{ type: Schema.Types.ObjectId, ref: "HouseList" }]
        }
    },
    { timestamps: true }
);

const HouseModel = new Model("House", HouseSchema);
module.exports = HouseModel;

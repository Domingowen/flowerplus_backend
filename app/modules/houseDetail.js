/*
    房屋里面的详细信息
*/
const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const HouseDetailSchema = new Schema(
    {
        roomType: {
            // 房间户型
            type: String
        },
        area: {
            // 房间面积
            type: String
        },
        rental: {
            // 月租金
            type: String
        },
        rentalMode: {
            // 收租模式
            type: String
        },
        roomPackage: {
            // 房间设施
            type: Array
        },
        roomPhoto: {
            type: Array
        },
        bindHouse: {
            // 绑定房屋的数据
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "HouseList"
                }
            ]
        }
    },
    { timestamps: true }
);

const HouseDetailModel = new Model("HouseDetail", HouseDetailSchema);
module.exports = HouseDetailModel;

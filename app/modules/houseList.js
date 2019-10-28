/*
    房子下的房屋列表
*/
const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const HouseListSchema = new Schema(
    {
        houseNumber: {
            // 房间号码
            type: String
        },
        housePrefix: {
            // 房间号码的前缀
            type: String
        },
        houseAccessMode: {
            // 通行方式 电梯 楼梯
            type: String
        },
        houseFloorNumber: {
            // 房间在多少层
            type: String
        },
        houseStatus: {
            // 房屋状态
            type: Boolean
        },
        houseSetting: {
            // 房间配置
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "HouseSetting"
                }
            ]
        }
    },
    { timestamps: true }
);

const HouseListModel = new Model("HouseList", HouseListSchema);
module.exports = HouseListModel;

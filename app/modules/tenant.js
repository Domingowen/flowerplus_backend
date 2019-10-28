const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const TenantSchema = new Schema(
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
        idCardPhoto: {
            // 身份证图片
            type: Array
        },
        photoList: {
            // 合同图片可以放这里
            type: Array
        },
        billList: {
            // 用户账单
            type: [{ type: Schema.Types.ObjectId, ref: "TenantBill" }]
        },
        room: {
            // 用户居住的房间
            type: [{ type: Schema.Types.ObjectId, ref: "HouseList" }]
        },
        house: {
            // 用户所在的房屋
            type: [{ type: Schema.Types.ObjectId, ref: "House" }]
        },
        startRental: {
            // 开始时间
            type: Date
        },
        endRental: {
            // 结束时间
            type: Date
        },
        paymenMode: {
            // 收租周期
            type: String
        },
        paymentPeriod: {
            // 每期交租
            type: String
        },
        securityDeposit: {
            // 押金
            type: String
        },
        remind: {
            // 提醒
            type: Boolean
        },
        remark: {
            type: String
        }
    },
    { timestamps: true }
);

const TenantModel = new Model("Tenant", TenantSchema);
module.exports = TenantModel;

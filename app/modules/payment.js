/*
    支付方式
*/
const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const PaymentSchema = new Schema(
    {
        paymentAccount: {
            // 支付账号 -> 微信 支付宝 银行卡
            type: String
        },
        paymentType: {
            // 支付方式选择
            type: String
        },
        paymentQR: {
            // 支付二维码
            type: String
        },
        paymentRemark: {
            // 支付备注
            type: String
        },
        bankOwner: {
            // 银行卡持卡人
            type: String
        },
        bankAddress: {
            // 银行卡开户行
            type: String
        },
        bankAddressBranch: {
            // 银行卡支行
            type: String
        },
        bindHouse: { // 绑定房产
            type: [{ type: Schema.Types.ObjectId, ref: "House" }]
        }
    },
    { timestamps: true }
);

const PaymentModel = new Model("Payment", PaymentSchema);
module.exports = PaymentModel;

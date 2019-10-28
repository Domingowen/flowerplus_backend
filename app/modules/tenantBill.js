const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const TenantBillSchema = new Schema(
    {
        waterFee: {
            type: Number
        },
        electricityFee: {
            type: Number
        },
    },
    { timestamps: true }
);

const TenantBillModel = new Model('TenantBill', TenantBillSchema);
module.exports = TenantBillModel;
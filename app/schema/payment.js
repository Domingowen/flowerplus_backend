/*
    支付数据
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({

});
const PaymentModel = model("PaymentModel", PaymentSchema);


module.exports = PaymentModel;
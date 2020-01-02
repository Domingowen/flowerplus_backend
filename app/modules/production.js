/* 
    产品数据设置
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductionSchema = new Schema({
    type: {
        type: String, // 0推荐
        required: true
    },
    id: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});
const ProductionModel = model("ProductionModel", ProductionSchema);
module.exports = ProductionModel;

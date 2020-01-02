const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DetailSchema = new Schema({
    picList: [],
    productionId: { // 产品Id
        type: String,
        required: true,
    },
    title: { // 标题
        type: String,
        required: true,
    },
    description: { // 描叙
        type: String,
        required: true,
    },
    disccountPrice: { // 折扣价
        type: String,
        required: true,
    },
    originalPrice: { // 原价
        type: String,
        required: true,
    },
    advantage: { // 优势标签
        type: Array,
    },
    promotion: { // 促销
        type: Array,
    },
    shareByUser: { // 用户分享
        type: Array
    },
    
    commoditySpecies: [ // 商品种类
        {
            name: {
                type: String,
                required: true,
            },
            speciesList: {
                type: Array,
            }
        },
    ]
});
const DetailModel = model('DetailModel', DetailSchema);
module.exports = DetailModel;



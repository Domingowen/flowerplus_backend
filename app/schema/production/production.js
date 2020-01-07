/*
    产品数据设置
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProductionSchema = new Schema({
    // type: {
    //     type: String, // 0 单品花束 1 混合花束 2 MINI花束 3 礼品花束
    //     required: true
    // },

    // haveRecommend: {
    //     // 是否推荐
    //     type: Boolean
    // },

    // recommendCategory: {
    //     // 推荐分类
    //     type: Array
    // },
    status: {
        // 0 下架 1 在售 2 定时发售
        type: Number,
        required: true
    },
    picBanner: [
        // 图片轮播
        {
            type: Schema.Types.ObjectId,
            ref: "ProductionBannerModel"
        }
    ],
    pic: {
        // 展示图片
        type: String,
        required: true
    },
    title: {
        // 标题
        type: String,
        required: true
    },
    description: {
        // 描叙
        type: String,
        required: true
    },
    advantage: [
        {
            // 优势标签
            type: Schema.Types.ObjectId,
            ref: "ProductionAdvantageModel"
        }
    ],
    promotionPolicies: [
        {
            // 促销政策
            type: Schema.Types.ObjectId,
            ref: "ProductionPromotionPolicyModel"
        }
    ],
    productionSku: {
        type: Schema.Types.ObjectId,
        ref: "ProductionSkuModel"
    },
    minPrice: {
        type: String
    },
    maxPrice: {
        type: String
    }
    // discountPrice: {
    //     // 折扣价
    //     type: Number,
    //     required: true
    // },
    // originalPrice: {
    //     // 原价
    //     type: Number,
    //     required: true
    // },
    // productionSpecies: [
    //     // 商品种类
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'ProductionSkuModel'
    //     }
    // ],
    // addOnItems: [
    //     // 购买附加物品
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "AttributeModel"
    //     }
    // ]
});
const ProductionModel = model("ProductionModel", ProductionSchema);
module.exports = ProductionModel;

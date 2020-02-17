const ProductionModel = require("../schema/production/production");
const AttributeModel = require("../schema/production/attribute");
const AttributeValueOptionModel = require("../schema/production/attribute_value_option");
const AttributeTypeModel = require("../schema/production/attribute_type");
// const AttributePriceModel = require('../schema/production/attribute_price');
const ProductionAdvantageModel = require("../schema/production/production_advantage");
const ProductionPromotionModel = require("../schema/production/production_promotion");
const ProductionSkuModel = require("../schema/production/production_sku");
const CategoryModel = require("../schema/production/categories");
const RecommendModel = require("../schema/recommend");

const shortId = require("shortid");

class production {
    /* 添加产品 */
    async createProduct(ctx, next) {
        console.log(ctx.request.body);
        const parameter = ctx.request.body;
        const result = await ProductionModel.create({
            title: parameter.title,
            description: parameter.description,
            pic: parameter.imgUrl,
            status: parameter.status,
            minPrice: parameter.minPrice,
            maxPrice: parameter.maxPrice
        });
        ctx.status = 200;
        ctx.body = {
            message: "产品创建成功",
            status: 200,
            data: {
                productId: result._id
            }
        };
    }

    /* 修改产品 */
    async modifyProduct(ctx, next) {
        console.log(ctx.request.body);
        const parameter = ctx.request.body;
        // const result = await ProductionModel.create({
        //     title: parameter.title,
        //     description: parameter.description,
        //     pic: parameter.imgUrl,
        //     status: parameter.status,
        //     minPrice: parameter.minPrice,
        //     maxPrice: parameter.maxPrice
        // });
        ctx.status = 200;
        ctx.body = {
            message: "产品修改成功",
            status: 200,
            data: {
                productId: result._id
            }
        };
    }

    /* 删除产品 */
    async deleteProduct(ctx, next) {
        console.log(ctx.request.body);
        const parameter = ctx.params;
        const result = await ProductionModel.create({
            _id: parameter.productId
        });
        ctx.status = 200;
        ctx.body = {
            message: "产品删除成功",
            status: 200,
            data: {
                productId: result._id
            }
        };
    }

    /* 添加产品的优势标签 */
    async creteProductAdvantage(ctx, next) {
        console.log(ctx.request.body);
        const parameter = ctx.request.body;
        const result = await ProductionAdvantageModel.create({
            name: parameter.name,
            value: parameter.value
        });
        ctx.status = 200;
        ctx.body = {
            message: "产品标签创建成功",
            status: 200,
            data: {
                advantageId: result._id
            }
        };
    }
    /* 删除产品的优势标签 */
    async deleteProductAdvantage(ctx, next) {
        console.log(ctx.request.body);
        console.log(ctx.params);
        const parameter = ctx.params;
        const result = await ProductionAdvantageModel.remove({ _id: parameter.advantageId });
        ctx.body = {
            message: "产品标签删除成功",
            status: 200
        };
    }

    /* 添加产品的促销优惠 */
    async creteProductPromotion(ctx, next) {
        console.log(ctx.request.body);
        const parameter = ctx.request.body;
        const result = await ProductionPromotionModel.create({
            label: parameter.label,
            value: parameter.value
        });
        const product = await ProductionModel.findOne({ _id: parameter.productId });
        product.promotion.push(result._id);
        ctx.status = 200;
        ctx.body = {
            message: "产品促销优惠创建成功",
            status: 200,
            data: {
                promotionId: result._id
            }
        };
    }

    /* 删除产品的促销优惠 */
    async deleteProductPromotion(ctx, next) {
        console.log(ctx.request.body);
        console.log(ctx.params);
        const parameter = ctx.params;
        const result = await ProductionPromotionModel.remove({ _id: parameter.promotionId });
        ctx.body = {
            message: "产品促销优惠删除成功",
            status: 200
        };
    }

    /* 添加产品的sku */
    async createProductSku(ctx, next) {
        console.log(ctx.request.body);
        const parameter = ctx.request.body;
        const product = await ProductionModel.findOne({ _id: parameter.productId });
        console.log(product);
        const result = await ProductionSkuModel.create({
            skuProperties: parameter.skuProperties,
            stock: parameter.stock,
            price: parameter.price,
            originPrice: parameter.originPrice,
            productId: parameter.productId,
            skuId: shortId.generate()
        });
        product.productionSku.push(result._id);
        product.save();
        ctx.body = {
            message: "产品SKU创建成功",
            status: 200,
            data: {
                skuId: result.skuId
            }
        };
    }

    /* 删除产品的sku */
    async deleteProductSku(ctx, next) {
        console.log(ctx.request.body);
    }

    /* 修改产品的sku */
    async modifyProductSku(ctx, next) {
        console.log(ctx.request.body);
    }

    /* 获取产品的属性 */
    async getProductAttribute(ctx, next) {
        console.log(ctx.request.body);
        const parameter = ctx.request.body;
        const result = await AttributeModel.find({ _id: attrId });
        ctx.status = 200;
        ctx.body = {};
    }

    /* 添加产品的属性 */
    async createProductAttribute(ctx, next) {
        console.log(ctx.request.body);
        const parameter = ctx.request.body;
        await ctx.verifyParams({
            name: "string"
            // haveAddOnItem: "boolean"
        });
        const result = await AttributeModel.create({
            name: parameter.name
        });
        console.log(result);
        ctx.status = 200;
        ctx.body = {
            message: "产品属性创建成功",
            status: 200,
            data: {
                attrId: result._id,
                name: result.name
            }
        };
    }

    /* 修改产品的属性 */
    async modifyProductAttribute(ctx, next) {}

    /* 删除产品的属性 */
    async deleteProductAttribute(ctx, next) {}
    // /* 添加产品的属性价格 */
    // async createProductAttributePrice(ctx, next) {
    // }

    /* 获取产品的属性值 */
    async getProductAttributeValue(ctx, next) {
        const parameter = ctx.request.body;
    }

    /* 添加产品的属性可选值 */
    async createProductAttributeValueOptions(ctx, next) {
        const parameter = ctx.request.body;
        await ctx.verifyParams({
            name: "string",
            //  value: "string",
            //  discountPrice: "number",
            //  originalPrice: "number",
            attrId: "string"
            //  stock: 'number'
            //  image: 'string',
            // haveAddOnItem: "boolean"
        });
        const attribute = await AttributeModel.findOne({ _id: parameter.attrId });
        // console.log(attribute);
        const result = await AttributeValueOptionModel.create({
            name: parameter.name,
            // value: parameter.value,
            image: parameter.image ? parameter.image : "",
            // discountPrice: parameter.discountPrice ? parameter.discountPrice : 0,
            // originalPrice: parameter.originalPrice,
            // stock: parameter.stock,
            attrId: parameter.attrId
        });
        console.log(result);
        await attribute.attributeValueId.push(result._id);
        await attribute.save();
        console.log(attribute);
        ctx.status = 200;
        ctx.body = {
            message: "产品属性值添加成功",
            status: 200,
            data: {
                attrSubId: result._id,
                attrId: parameter.attrId
            }
        };
    }
    /* 修改产品的属性可选值 */
    async modifyProductAttributeValueOptions(ctx, next) {}

    /* 删除产品的属性可选值 */
    async deleteProductAttributeValueOptions(ctx, next) {}

    /* 添加产品类别 */

    async createCategory(ctx, next) {
        const parameter = ctx.request.body;
        let result = null;
        if (parameter.categoryId) {
            result = await CategoryModel.findOne({ _id: parameter.categoryId });
            if (result.productId.indexOf(parameter.productId) === -1) {
                result.productId.push(parameter.productId);
            }
            result.save();
        } else {
            result = await CategoryModel.create({
                productId: parameter.productId,
                title: parameter.title
            });
        }
        ctx.body = {
            status: 200,
            message: "目录添加成功",
            data: {
                categoryId: result._id
            }
        };
        // await CategoryModel.create({
        //     productId: parameter.productId
        // })
        // const list = await ProductionModel.find();
        // const promotionList = await ProductionPromotionModel.find();
        // list.forEach(val => {
        //     promotionList.map(res => val.promotion.push(res._id));
        //     val.save();
        // });
        // console.log(list);
        // list.save();
        // const res = await ProductionModel.update(
        //     {},
        //     {
        //         $rename: { promotionPolicies: "promotion" }
        //     }
        // );
        // const res = await ProductionModel.collection.update({}, { $rename: { productId: shortId.generate() } }, { multi: true });
        // res.save();
        // console.log(res);
    }
    /* 修改产品类别 */

    async modifyCategory(ctx, next) {}
    /* 删除产品类别 */

    async deleteCategory(ctx, next) {}

    /* 推荐列表添加 */

    async addRecommend(ctx, next) {
        const parameter = await ctx.request.body;
        let result = null;
        if (parameter.recommendId) {
            result = await RecommendModel.findOne({ _id: parameter.recommendId });
            if (result.productionId.indexOf(parameter.productionId) === -1) {
                result.productionId.push(parameter.productionId);
                result.save();
            }
        } else {
            result = await RecommendModel.create({
                title: parameter.title,
                englishTitle: parameter.englishTitle,
                productionId: parameter.productionId
            });
        }
        ctx.body = {
            status: 200,
            data: {
                recommendId: result._id,
                title: result.title
            }
        };
    }

    /* 删除推荐物品 */

    async deleteRecommendThings(ctx, next) {}

    /* 删除推荐目录 */

    async deleteRecommendCategory(ctx, next) {}

    /* test router */

    async test(ctx, next) {
        const res = await CategoryModel.collection.updateMany(
            {},
            {
                $set: {
                    categoryTitle: "",
                    categoryEnglishTitle: ""
                }
            },
            {}
        );
        console.log(res);
        /*
            https://stackoverflow.com/questions/43819186/c-sharp-mongodb-cartesian-product-of-multiple-object-array-documents
        */
        // let res = null;
        // await AttributeModel.aggregate(
        //     [
        //         {
        //             $lookup: {
        //                 from: "attributevalueoptionmodels",
        //                 localField: "attrId",
        //                 foreignField: "attrId",
        //                 as: "attributeValueId"
        //             }
        //         },
        //         // { $unwind: "$attributeValueId" },
        //         {
        //             $group: {
        //                 _id: "",
        //                 sku: {
        //                     $push: {
        //                         attrVal: "$attributeValueId",
        //                         attrName: "$name"
        //                     }
        //                 }
        //             }
        //         },
        //         {
        //             $project: {
        //                 sku: {
        //                     $reduce: {
        //                         input: { $slice: ["$sku", 1, { $subtract: [{ $size: "$sku" }, 1] }] },
        //                         initialValue: {
        //                             $arrayElemAt: ["$sku", 0]
        //                         },
        //                         in: {
        //                             $let: {
        //                                 vars: {
        //                                     currentResult: "$$value.attrVal",
        //                                     currentIndex: "$$this.attrVal"
        //                                 },
        //                                 in: {
        //                                     $reduce: {
        //                                         input: {
        //                                             $map: {
        //                                                 input: "$$currentResult",
        //                                                 as: "a",
        //                                                 in: {
        //                                                     $map: {
        //                                                         input: "$$currentIndex",
        //                                                         as: "r",
        //                                                         in: {
        //                                                             value: { $concat: ["$$a.attrId", ":", "$$a.attrValId", ";", "$$r.attrId", ":", "$$r.attrValId"] },
        //                                                             propertyName: { $concat: ["$$value.attrName", ":", "$$a.name", ";", "$$this.attrName", ":", "$$r.name"] }
        //                                                         }
        //                                                     }
        //                                                 }
        //                                             }
        //                                         },
        //                                         initialValue: [],
        //                                         in: {
        //                                             $concatArrays: ["$$value", "$$this"]
        //                                         }
        //                                     }
        //                                 }
        //                             }
        //                         }
        //                     }
        //                 }
        //             }
        //         },
        //         { $limit: 1 }
        //     ],
        //     function(err, data) {
        //         // callback(err, data);
        //         res = data[0];
        //     }
        // );
        // console.log(res);
        // res.sku.forEach(async val => {
        //     await ProductionSkuModel.create({
        //         skuPropertyName: val.propertyName,
        //         skuProperties: val.value,
        //         stock: 100,
        //         price: 100,
        //         originPrice: 100,
        //         skuId: shortId.generate()
        //     });
        // });
        // ctx.body = {
        //     data: res
        // };
        // console.log(res);
        // ProductionModel.find({}, (err, data) => {
        //     data.map(async val => {
        //         ProductionSkuModel.find({}, (err, dataSku) => {
        //             dataSku.map(async res => {
        //                 await val.productionSku.push(res._id);
        //             });
        //         });
        //         await val.save();
        //     });
        // });
    }
}

module.exports = new production();

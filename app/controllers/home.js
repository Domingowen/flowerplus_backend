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
const OrderModel = require("../schema/order");
const UserModel = require("../schema/user.js");
const shortid = require('shortid');

class HomeController {
    /* 获取首页数据 */
    async homeIndex(ctx, next) {
        const category = await CategoryModel.find().populate({
            path: "productId",
            populate: {
                path: "advantage promotion productionSku productionAttr",
                populate: {
                    path: "attributeValueId"
                }
            }
        });
        const recommend = await RecommendModel.find().populate({
            path: "productionId",
            populate: {
                path: "advantage promotion productionSku productionAttr",
                populate: {
                    path: "attributeValueId"
                }
            }
        });
        console.log(recommend);
        ctx.body = {
            status: 200,
            message: "请求成功",
            data: {
                categoryList: category,
                recommendList: recommend
            }
        };
    }
    /* 获取商品详细信息 */
    async detailIndex(ctx, next) {
        const parameter = ctx.request.body;
        console.log(parameter);
        const product = await ProductionModel.findOne({
            _id: parameter.productId
        }).populate({
            path: "advantage promotion productionSku productionAttr",
            populate: {
                path: "attributeValueId"
            }
        });
        console.log(product);
        ctx.body = {
            status: 200,
            message: "请求成功",
            data: product
        };
    }
    /* 生成订单 */
    async orderIndex(ctx, next) {
        const parameter = ctx.request.body;
        console.log(parameter);
        const skuResult = await ProductionSkuModel.findOne({ _id: parameter.skuId });
        console.log(skuResult);
        const productResult = await ProductionModel.findOne({ _id: parameter.productId });
        console.log(productResult);
        const userResult = await UserModel.findOne({ _id: parameter.userId }).populate("address");
        console.log(userResult);
        const addressResult = userResult.address.filter((val, index) => val.default);
        console.log(addressResult);
        const OrderResult = await OrderModel.create({
            status: 1,
            title: productResult.title,
            number: 1,
            price: skuResult.price,
            deliveryFee: 0,
            totalPrice: skuResult.price + 0,
            expressStatus: 0,
            pic: productResult.pic,
            productionId: parameter.productId,
            skuId: skuResult._id,
            addressId: addressResult.length > 0 ? addressResult[0]._id : null,
            orderId: shortid.generate()
        });
        userResult.orderList.push(OrderResult._id);
        userResult.save();
        console.log(OrderResult);
        ctx.body = {
            status: 200,
            message: "订单生成成功",
            data: {
                orderId: OrderResult.orderId
            }
        };
    }
    /* 获取订单信息 */
    async orderGet(ctx, next) {
        const parameter = ctx.query;
        console.log(parameter);
        const OrderResult = await OrderModel.findOne({ orderId: parameter.orderId }).populate({ path: "skuId addressId" });
        console.log(OrderResult);
        ctx.body = {
            status: 200,
            message: "订单查询成功",
            data: {
                order: OrderResult
            }
        };
    }
    /*
        add address to order
    */
    async orderAddress(ctx, next) {
        const parameter = ctx.request.body;
        console.log(parameter);
        const OrderResult = await OrderModel.findOne({ orderId: parameter.orderId });
        OrderResult.addressId = parameter.addressId;
        await OrderResult.save();
        ctx.body = {
            status: 200,
            message: "地址修改成功",
            data: {
                order: OrderResult
            }
        };
    }

    /* modify order */
    async orderModify(ctx, next) {
        const parameter = ctx.request.body;
        const OrderResult = await OrderModel.findOne({ orderId: parameter.orderId });
        OrderResult.status = parameter.status;
        await OrderResult.save();
        ctx.body = {
            status: 200,
            message: "订单提交成功",
            data: {
                orderId: OrderResult.orderId
            }
        };
    }
}
module.exports = new HomeController();

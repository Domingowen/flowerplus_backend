const ProductionModel = require("../schema/production/production");
const AttributeModel = require("../schema/production/attribute");
const AttributeValueOptionModel = require("../schema/production/attribute_value_option");
const AttributeTypeModel = require("../schema/production/attribute_type");
// const AttributePriceModel = require('../schema/production/attribute_price');
const CategoryModel = require("../schema/production/categories");

class production {
    /* 添加产品的sku */
    async createProductSku(ctx, next) {
        console.log(ctx.request.body);
    }

    /* 删除产品的sku */
    async deleteProductSku(ctx, next) {
        console.log(ctx.request.body);
    }

    /* 修改产品的sku */
    async modifyProductSku(ctx, next) {
        console.log(ctx.request.body);
    }

    /* 添加产品的属性 */
    async createProductAttribute(ctx, next) {
        console.log(ctx.request.body);
        const parameter = ctx.request.body;
        await ctx.verifyParams({
            name: "string",
            // haveAddOnItem: "boolean"
        });
        await AttributeModel.create({
            name: parameter.name,
            haveAddOnItem: parameter.haveAddOnItem
        });
    }

    /* 修改产品的属性 */
    async modifyProductAttribute(ctx, next) {}

    /* 删除产品的属性 */
    async deleteProductAttribute(ctx, next) {}
    // /* 添加产品的属性价格 */
    // async createProductAttributePrice(ctx, next) {
    // }

    /* 添加产品的属性可选值 */
    async createProductAttributeValueOptions(ctx, next) {}
    /* 修改产品的属性可选值 */
    async modifyProductAttributeValueOptions(ctx, next) {}

    /* 删除产品的属性可选值 */
    async deleteProductAttributeValueOptions(ctx, next) {}

    /* 添加产品类别 */

    async createCategory(ctx, next) {}
    /* 修改产品类别 */

    async modifyCategory(ctx, next) {}
    /* 删除产品类别 */

    async deleteCategory(ctx, next) {}
}

module.exports = new production();

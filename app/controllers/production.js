const ProductionModel = require("../schema/production/production");
const AttributeModel = require("../schema/production/attribute");
const AttributeValueOptionModel = require("../schema/production/attribute_value_option");
const AttributeTypeModel = require("../schema/production/attribute_type");
// const AttributePriceModel = require('../schema/production/attribute_price');
const CategoryModel = require("../schema/production/categories");

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
            maxPrice: parameter.maxPrice,
        });
        ctx.status = 200;
        ctx.body = {
            message: '产品创建成功',
            status: 200,
            data: {
                productId: result._id,
            }
        }
    }

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
    /* 获取产品的属性 */
    async getProductAttribute(ctx, next) {
        console.log(ctx.request.body);
        const parameter = ctx.request.body;
        const result = await AttributeModel.find({ _id: attrId });
        ctx.status = 200;
        ctx.body = {
            
        }
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
            name: parameter.name,
            haveAddOnItem: parameter.haveAddOnItem
        });
        console.log(result);
        ctx.status = 200;
        ctx.body = {
            message: "产品属性创建成功",
            status: 200,
            data: {
                attrId: result._id,
                name: result.name,
                havaAddOnItem: result.haveAddOnItem
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
            value: parameter.value,
            image: parameter.image ? parameter.image : "",
            discountPrice: parameter.discountPrice ? parameter.discountPrice : 0,
            originalPrice: parameter.originalPrice,
            stock: parameter.stock,
            attrId: parameter.attrId,
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
    async deleteProductAttributeValueOptions(ctx, next) {

    }

    /* 添加产品类别 */

    async createCategory(ctx, next) {}
    /* 修改产品类别 */

    async modifyCategory(ctx, next) {}
    /* 删除产品类别 */

    async deleteCategory(ctx, next) {}
}

module.exports = new production();

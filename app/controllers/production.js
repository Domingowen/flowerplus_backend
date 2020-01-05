const ProductionModel = require('../schema/production/production');
const AttributeModel =  require('../schema/production/attribute');
const AttributeValueOptionModel =  require('../schema/production/attribute_value_option');
const AttributeTypeModel = require('../schema/production/attribute_type');
const AttributePriceModel = require('../schema/production/attribute_price');
const CategoryModel = require('../schema/production/categories');

class production {
    /* 添加产品的sku */
    async createProductSku(ctx, next) {
        
    }
    /* 添加产品的属性 */
    async createProductAttribute(ctx, next) {

    }
    /* 添加产品的属性价格 */
    async createProductAttributePrice(ctx, next) {

    }
    /* 添加产品的属性可选值 */
    async createProductAttributeValueOptions(ctx, next) {

    }

    /* 添加产品类别 */

    async createCategory(ctx, next) {

    }
}

module.exports = new production();

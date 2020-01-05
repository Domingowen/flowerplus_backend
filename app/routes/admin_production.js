const router = require("koa-router");
const adminProductRouter = new router();
const { createProductSku, createProductAttribute, createProductAttributePrice, createProductAttributeValueOptions, createCategory } = require("../controllers/production");

adminProductRouter.post("/admin/create_product_sku", createProductSku);
adminProductRouter.post("/admin/create_product_attr", createProductAttribute);
adminProductRouter.post("/admin/create_product_attr_price", createProductAttributePrice);
adminProductRouter.post("/admin/create_product_attr_val_opt", createProductAttributeValueOptions);
adminProductRouter.post("/admin/create_product_category", createCategory);

module.exports = adminProductRouter;

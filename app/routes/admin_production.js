const router = require("koa-router");
const adminProductRouter = new router();
const {
    createProduct,
    deleteProduct,
    createProductSku,
    createProductAttribute,
    createProductAttributePrice,
    createProductAttributeValueOptions,
    createCategory,
    modifyProductAttribute,
    deleteProductAttribute,
    modifyProductAttributeValueOptions,
    deleteProductAttributeValueOptions
} = require("../controllers/production");

adminProductRouter.get("/admin/get_product");

adminProductRouter.post("/admin/create_product", createProduct);
adminProductRouter.post("/admin/delete_product");

adminProductRouter.post("/admin/create_product_sku", createProductSku);
adminProductRouter.post("/admin/get_product_attr", createProductAttribute);
adminProductRouter.post("/admin/create_product_attr", createProductAttribute);
adminProductRouter.post("/admin/delete_product_attr", deleteProductAttribute);
adminProductRouter.post("/admin/modify_product_attr", modifyProductAttribute);
// adminProductRouter.post("/admin/create_product_attr_price", createProductAttributePrice);
adminProductRouter.post("/admin/get_product_attr_val_opt", createProductAttributeValueOptions);
adminProductRouter.post("/admin/create_product_attr_val_opt", createProductAttributeValueOptions);
adminProductRouter.post("/admin/modify_product_attr_val_opt", modifyProductAttributeValueOptions);
adminProductRouter.post("/admin/delete_product_attr_val_opt", deleteProductAttributeValueOptions);
adminProductRouter.post("/admin/create_product_category", createCategory);

module.exports = adminProductRouter;

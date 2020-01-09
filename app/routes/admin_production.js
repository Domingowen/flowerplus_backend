const router = require("koa-router");
const adminProductRouter = new router();
const {
    createProduct,
    deleteProduct,
    modifyProduct,
    createProductSku,
    deleteProductSku,
    modifyProductSku,
    createProductAttribute,
    createProductAttributePrice,
    createProductAttributeValueOptions,
    createCategory,
    modifyProductAttribute,
    deleteProductAttribute,
    modifyProductAttributeValueOptions,
    deleteProductAttributeValueOptions,

    creteProductAdvantage,
    deleteProductAdvantage,
    creteProductPromotion,
    deleteProductPromotion,


    test,

} = require("../controllers/production");

adminProductRouter.get("/admin/get_product/:productId");

adminProductRouter.post("/admin/create_product", createProduct);

adminProductRouter.post("/admin/modify_product", modifyProduct);

adminProductRouter.delete("/admin/delete_product/:productId", deleteProduct);

adminProductRouter.post("/admin/create_product_advantage", creteProductAdvantage);

adminProductRouter.delete("/admin/delete_product_advantage/:advantageId", deleteProductAdvantage);


adminProductRouter.post("/admin/create_product_promotion", creteProductPromotion);

adminProductRouter.delete("/admin/delete_product_promotion/:promotionId", deleteProductPromotion);

adminProductRouter.post("/admin/create_product_sku", createProductSku);
adminProductRouter.post("/admin/modify_product_sku", modifyProductSku);
adminProductRouter.post("/admin/delete_product_sku", deleteProductSku);

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


adminProductRouter.post("/admin/test", test);



module.exports = adminProductRouter;

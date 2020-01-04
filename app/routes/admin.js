const router = require("koa-router");
const adminRouter = new router();
const { createProduct, deleteProduct, addCoupon, deleteCoupon, distributeCoupon, sendNotice, sendPromotion, checkAuth } = require("../controllers/admin");

adminRouter.post("/admin/create_product", createProduct);
adminRouter.post("/admin/detele_product", deleteProduct);
adminRouter.post("/admin/add_coupon", addCoupon);
adminRouter.post("/admin/delete_coupon", deleteCoupon);
adminRouter.post("/admin/distribute_coupon", distributeCoupon);
adminRouter.post("/admin/send_notice", sendNotice);
adminRouter.post("/admin/send_promotion", sendPromotion);
module.exports = adminRouter;

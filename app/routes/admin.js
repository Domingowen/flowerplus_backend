const router = require("koa-router");
const adminRouter = new router();
const { createProduct, deleteProduct } = require("../controllers/admin");

adminRouter.post("/create_product", createProduct);
adminRouter.post("/detele_product", deleteProduct);

module.exports = adminRouter;

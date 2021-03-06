const router = require("koa-router");
const homeRouter = new router();
const { homeIndex, detailIndex, orderIndex , orderGet, orderModify, orderAddress} = require("../controllers/home");
homeRouter.get("/home/index", homeIndex);
homeRouter.post('/detail/index', detailIndex);
homeRouter.post('/order/index', orderIndex);
homeRouter.get("/order/get", orderGet);
homeRouter.post("/order/modify", orderModify);
homeRouter.post("/order/address", orderAddress);
module.exports = homeRouter;
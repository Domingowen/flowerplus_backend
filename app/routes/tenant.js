const Router = require("koa-router");
const tenant = new Router();
tenant.get("/");

module.exports = tenant;

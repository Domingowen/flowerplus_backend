const router = require("koa-router");
const userRouter = new router();
const { login, register } = require("../controllers/user");
userRouter.post("/login", login);
userRouter.post("/register", register);

module.exports = userRouter;

const router = require("koa-router");
const userRouter = new router();
const { login, register, checkPhone, checkUser } = require("../controllers/user");

userRouter.post("/login",checkUser, login);
userRouter.post("/register",checkUser, checkPhone, register);

module.exports = userRouter;

const router = require("koa-router");
const userRouter = new router();
const { login, register, checkPhone, checkUser, getUser, addAddress, deleteAddress } = require("../controllers/user");

userRouter.post("/login",checkUser, login);
userRouter.post("/register",checkUser, checkPhone, register);
userRouter.post("/add_address",getUser, addAddress);
userRouter.delete('/delete_address',getUser, deleteAddress);
module.exports = userRouter;

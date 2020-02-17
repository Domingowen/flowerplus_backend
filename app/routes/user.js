const router = require("koa-router");
const userRouter = new router();
const { login, register, checkPhone, checkUser, getUser, addAddress, deleteAddress, getAddress, addressDefaultSetting, queryAllOrderList } = require("../controllers/user");

userRouter.post("/login",checkUser, login);
userRouter.post("/register",checkUser, register);
userRouter.post("/add_address",getUser, addAddress);
userRouter.get("/get_address_list", getAddress);
// userRouter.post("/get_order", addAddress);
userRouter.delete('/delete_address',getUser, deleteAddress);
userRouter.post("/default_address", getUser, addressDefaultSetting);
userRouter.post("/get_order_list", getUser, queryAllOrderList);
module.exports = userRouter;

/* 
    user controller login register
*/
const Mongoose = require("mongoose");

const { Schema, model } = Mongoose;
const UserModel = require("../schema/user.js");
const AddressModel = require("../schema/address.js");
const OrderModel = require("../schema/order");
const { generateToken } = require("../utils/token");
const { encrypt, validate } = require("../utils/password");
class UserController {
    async login(ctx, next) {
        console.log(ctx.request.body);
        // ctx.throw(400, "Error Message");
        await ctx.verifyParams({
            username: "string",
            password: "string"
        });
        let parameter = await ctx.request.body;
        console.log(parameter);
        const { checkUser } = ctx.state;
        // console.log(checkUser, 'checkUser');
        if (checkUser) {
            let checkPassword = await validate(parameter.password, checkUser.password);
            if (checkPassword) {
                let token = await generateToken({ username: parameter.username, password: parameter.password });
                ctx.status = 200;
                ctx.body = {
                    message: "登录成功",
                    data: {
                        token: token,
                        userId: checkUser._id,
                        user: {
                            username: checkUser.username,
                            orderList: checkUser.orderList,
                            coupons: checkUser.coupons,
                            address: checkUser.address,
                            level: checkUser.level
                        }
                    }
                };
            } else {
                ctx.throw(401, "密码不正确");
            }
        } else {
            ctx.throw(401, "用户名不正确");
        }
    }
    async register(ctx, next) {
        await ctx.verifyParams({
            username: "string",
            password: "string"
        });
        let parameter = await ctx.request.body;
        console.log(parameter);
        const { checkPhone, checkUser } = ctx.state;
        if (checkUser) {
            ctx.throw(402, "用户名已经存在");
        } else {
            let password = await encrypt(parameter.password);
            const result = await UserModel.create({
                username: parameter.username,
                password: password
                // phone: parameter.phone
            });
            if (result) {
                let token = await generateToken({ username: parameter.username, password: parameter.password });
                ctx.status = 200;
                ctx.body = {
                    message: "注册成功",
                    data: {
                        token: token,
                        userId: result._id,
                        user: {
                            username: result.username,
                            orderList: result.orderList,
                            coupons: result.coupons,
                            address: result.address,
                            level: result.level
                        }
                    }
                };
            }
        }
    }

    /* 
        检查用户是否存在
    */
    async checkUser(ctx, next) {
        await ctx.verifyParams({
            username: "string"
        });
        let parameter = await ctx.request.body;
        console.log(parameter);
        let checkUser = await UserModel.findOne({ username: parameter.username });
        // console.log(checkUser, 'check User');
        ctx.state.checkUser = checkUser;
        await next();
    }

    /* 
        检查手机号码是否存在
    */
    async checkPhone(ctx, next) {
        await ctx.verifyParams({
            phone: "string"
        });
        let parameter = await ctx.request.body;
        // console.log(parameter);
        let checkPhone = await UserModel.findOne({ phone: parameter.phone });
        // console.log(checkPhone, 'check phone');
        ctx.state.checkPhone = checkPhone;
        await next();
    }

    /* 
        获取用户信息
    */
    async getUser(ctx, next) {
        await ctx.verifyParams({
            userId: "string"
        });
        console.log(ctx.request.body);
        console.log(ctx.query);
        // let requestMethod = ctx.request.method;
        let getUser = await UserModel.findOne({
            _id: ctx.request.body ? ctx.request.body.userId : ctx.query.userId
        });
        ctx.state.userInfo = getUser;
        // console.log(ctx.request.method);
        await next();
    }

    async getAddress(ctx, next) {
        // 获取地址列表
        let parameter = await ctx.query;
        console.log(parameter);
        let result = await UserModel.findOne({
            _id: parameter.userId
        }).populate("address");
        console.log(result);
        ctx.body = {
            status: 200,
            message: "请求成功",
            data: {
                address: result.address
            }
        };
    }
    /*
        add address
    */

    async addAddress(ctx, next) {
        let parameter = await ctx.request.body;
        console.log(parameter);
        if (parameter.default) {
            let address = await AddressModel.updateMany(
                {
                    userId: parameter.userId
                },
                {
                    default: false
                }
            );
            console.log(address);
        }

        let result = await AddressModel.create({
            userId: parameter.userId,
            // province: parameter.province,
            // city: parameter.city,
            // district: parameter.district,
            name: parameter.name,
            phone: parameter.phone,
            address: parameter.address,
            detail: parameter.detail,
            areaCode: parameter.areaCode,
            default: parameter.default ? parameter.default : false
        });
        console.log(result);
        let { userInfo } = ctx.state;
        userInfo.address.push(result._id);
        userInfo.save();
        console.log(userInfo);
        ctx.body = {
            status: 200,
            message: "地址添加成功",
            data: {
                addressId: result._id
            }
        };
    }

    // /*
    //     setDetaul address
    // */
    // async setDefaultAddress(ctx, next) {
    //     let parameter = ctx.request.body;

    // }

    /* 
        delete address
    */
    async deleteAddress(ctx, next) {
        let parameter = await ctx.query;
        console.log(parameter);
        let { userInfo } = await ctx.state;
        let result = await AddressModel.remove({
            _id: addressId
        });

        console.log(result);
        ctx.body = {
            status: 200,
            message: "地址删除成功"
        };
        // await AddressModel.remove({

        // })
    }

    /* 
        change addressDefault 
    */
    async addressDefaultSetting(ctx, next) {
        const parameter = await ctx.request.body;
        await AddressModel.updateMany(
            {
                userId: parameter.userId
            },
            {
                default: false
            }
        );
        await AddressModel.updateOne(
            {
                _id: parameter.addressId
            },
            {
                default: true
            }
        );
        // console.log(result);
        ctx.body = {
            status: 200,
            message: "默认地址修改成功"
        };
    }

    /* 
        check all order status
    */
    async queryAllOrderList(ctx, next) {
        const parameter = await ctx.request.body;
        console.log(parameter);
        let conditionSetting = {};
        if (parameter.status) {
            conditionSetting["$in"] = parameter.status;
        } else {
            conditionSetting["$in"] = [2, 3, 4, 5];
        }
        const orderList = await UserModel.findOne({ _id: parameter.userId }).populate({
            path: "orderList",
            match: {
                status: conditionSetting
            },
            populate: { path: "skuId addressId" }
        });
        console.log(orderList);
        ctx.body = {
            status: 200,
            message: "订单查询成功",
            data: {
                orderList: orderList.orderList
            }
        };
    }
}
module.exports = new UserController();

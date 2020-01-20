/* 
    user controller login register
*/
const UserModel = require("../schema/user.js");
const AddressModel = require("../schema/address.js");
const { generateToken } = require("../utils/token");
const { encrypt, validate } = require("../utils/password");
class UserController {
    async login(ctx, next) {
        console.log(ctx.request.body);
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
                        userId: checkUser._id
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
            password: "string",
            phone: "string"
        });
        let parameter = await ctx.request.body;
        console.log(parameter);
        const { checkPhone, checkUser } = ctx.state;
        if (checkUser) {
            ctx.throw(402, "用户名已经存在");
        } else if (checkPhone) {
            ctx.throw(402, "手机号已经存在");
        } else {
            let password = await encrypt(parameter.password);
            const result = await UserModel.create({
                username: parameter.username,
                password: password,
                phone: parameter.phone
            });
            if (result) {
                let token = await generateToken({ username: parameter.username, password: parameter.password });
                ctx.status = 200;
                ctx.body = {
                    message: "注册成功",
                    data: {
                        token: token
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

    /* 
        add address
    */
    async addAddress(ctx, next) {
        let parameter = await ctx.request.body;
        console.log(parameter);
        if (parameter.default) {
            let address = await AddressModel.updateMany({
                userId: parameter.userId
            }, {
                default: false
            });
            console.log(address);
        }

        let result = await AddressModel.create({
            userId: parameter.userId,
            province: parameter.province,
            city: parameter.city,
            district: parameter.district,
            detail: parameter.detail,
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

    /* 
        delete address
    */
    async deleteAddress(ctx, next) {
        let parameter = await ctx.query;
        console.log(parameter);
        let {userInfo}
        let result = await AddressModel.remove({
            _id: addressId
        });
        
        console.log(result);
        // await AddressModel.remove({

        // })
    }
}
module.exports = new UserController();

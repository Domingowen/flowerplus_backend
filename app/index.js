const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const MongoDB = require("./mongodb/index.js");
const Logger = require("koa-logger");
const KoaBody = require("koa-better-body");
const routerCombine = require("./routes/index.js");
const parameter = require("koa-parameter");
const error = require("koa-json-error");
const path = require("path");
const serve = require("koa-static");
const cors = require("@koa/cors");
const ip = require("ip");
const qs = require("querystring");
const clc = require("cli-color");
const createError = require("http-errors");


const formData = require("./utils/formidable");
const redisClient = require('./redis/index');


app.use(error());
parameter(app); // 参数校验
MongoDB.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
app.use(cors());
app.use(serve(path.join(__dirname, "public")));
app.use(Logger());
// app.use(createError());
app.use(
    KoaBody({
        fields: "body",
        IncomingForm: formData,
        querystring: qs
        // encoding: 'utf-8', // this is the default
        // multipart: true, // this is default
    })
);
// app.use(async (ctx, next) => {
//     // console.log(ctx.reuqest.fields);
//     // console.log(clc.red(ctx.query.token, "token"));
//     return next();
// });
/* import router */
routerCombine(app);

app.listen(3000, ip.address(), () => {
    console.log("app starting" + "this request ip  " + ip.address() + ":3000");
});

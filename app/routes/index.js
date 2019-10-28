const path = require("path");
const fs = require("fs");
// const Router = require('koa-router');

console.log(path.join(__dirname));
const routerCombine = app => {
    // console.log(app);
    fs.readdir(path.join(__dirname), (err, res) => {
        // console.log(res);
        res.forEach((val, index) => {
            if (val !== "index.js") {
                // console.log(val);
                let router = require(`./${val}`);
                app.use(router.routes(), router.allowedMethods());
            }
        });
    });
};
module.exports = routerCombine;

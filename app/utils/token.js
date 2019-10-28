const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
function generateToken(data) {
    let cert = fs.readFileSync(path.join(__dirname, "./rsa_private_key.pem"));
    return jwt.sign(
        {
            data
        },
        cert,
        { expiresIn: "7d", algorithm: "RS256" }
    );
}
function verifyToken(token) {
    let cert = fs.readFileSync(path.join(__dirname, "./rsa_public_key.pem"));
    // const auth = koajwt({
    //     // token验证
    //     secret: cert,
    //     debug: false,
    //     algorithms: ["RS256"],
    //     getToken: function(ctx, opts) {
    //         return ctx.request.body.token;
    //     }
    // });
    // return auth;
}
module.exports = {
    generateToken,
    verifyToken
};

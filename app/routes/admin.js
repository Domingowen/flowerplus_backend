const Router = require('koa-router');
const admin = new Router();
const { login, logout} = require('../controllers/landlord.js');
admin.post("/login", login);
admin.post("/logout", logout);
admin.post('/basic_info');


module.exports = admin;
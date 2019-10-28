const Router = require('koa-router');
const landlord = new Router();
const { login, logout} = require('../controllers/landlord.js');
landlord.post("/login", login);
landlord.post("/logout", logout);
landlord.post('/basic_info');


module.exports = landlord;
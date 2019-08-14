const express = require('express');
const routerLogin = express.Router();

const LoginConEmailPassAction= require("../loginController/LoginConEmailPassAction");


routerLogin.post('/email_and_pass', LoginConEmailPassAction);


module.exports = routerLogin;

const express = require('express');
const routerLogin = express.Router();

const LoginConEmailPassAction= require("../loginController/");


routerLogin.post('/email_and_pass', LoginConEmailPassAction);


module.exports = routerLogin;

const express = require('express');
const jsonwebtoken = require('jsonwebtoken');

const BuilderJsonResponse = require("../lib/BuilderJsonResponse");

const routerLogin = express.Router();


routerLogin.post('/email_and_pass', async (req, res, next) => {
  let dataRaw = req.body;

  let resultadoAutenticacion = await AutService.getDataFromUserPass(dataRaw.user, dataRaw.password);

  if (resultadoAutenticacion.success === false) {
    return BuilderJsonResponse.Error(res, resultadoAutenticacion.msg, 403);
  }


  jsonwebtoken.sign({data: resultadoAutenticacion.data.internal}, ServerConfig.jwtSecret, {expiresIn: '8h'}, (err, token) => {

    if (err) {
      BuilderJsonResponse.Error(res, err);
    } else {

      const dataRespuesta = {
        data: resultadoAutenticacion.data.public,
        token: token
      };

      BuilderJsonResponse.Success(res, dataRespuesta);
    }

  });


});

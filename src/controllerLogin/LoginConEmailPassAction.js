const BuilderJsonResponse = require("../lib/BuilderJsonResponse");
const ServerConfig = require("../ServerConfig");
const AutService = require("../service/aut/AutService");
const jsonwebtoken = require("jsonwebtoken");


const LoginConEmailPassAction = async (req, res, next) => {

  let dataRaw = req.body;

  let resultadoAutenticacion = await AutService.getDataFromUserPass(dataRaw.user, dataRaw.password);

  if (resultadoAutenticacion.success === false) {
    return BuilderJsonResponse.Error(res, resultadoAutenticacion.msg, 403);
  }

  const dataAutenticacion = resultadoAutenticacion.data;

  const fnGetToken = async () => {

    const promise = new Promise(function (resolve, reject) {

      jsonwebtoken.sign(
          {data: dataAutenticacion.internal},
          ServerConfig.jwtSecret,
          {expiresIn: '8h'}, (err, token) => {

            if (err) {
              reject(err);
            } else {
              resolve(token);
            }

          })
      ;

    });

    promise
        .then(token => {
          return token;
        })
    ;
    return promise;
  };


  const token = await fnGetToken();

  const dataRespuesta = {
    data: dataAutenticacion.public,
    token: token
  };

  BuilderJsonResponse.Success(res, dataRespuesta);

};


module.exports = LoginConEmailPassAction;


'use strict';

/**
 * Created by David on 18/07/2019.
 */

var assert = require('assert');
const BuilderJsonResponse = require("../../../src/lib/BuilderJsonResponse");

let res = {
  statusValor: 0,
  jsonValor: '',
  status(v) {
    this.statusValor = v;
    return this;
  },
  json(v) {
    this.jsonValor = v
  },
  getJson() {
    return this.jsonValor;
  },
  getStatus() {
    return this.statusValor;
  },
  reset() {
    this.statusValor = null;
    this.jsonValor = null;
  }

};


function assert_comparar(calculo, resultadoCorrecto) {
  let textoCalculo = JSON.stringify(calculo);
  let textoResultadoCorrecto = JSON.stringify(resultadoCorrecto);
  assert(textoCalculo === textoResultadoCorrecto, "No coincide json");
}


describe('BuilderJsonResponse_test', function () {

  it('Success - ok', function () {

    res.reset();

    BuilderJsonResponse.Success(res, {v1: 1});

    assert(200 === res.getStatus(), "El status es incorrecto");

    let dataEsperado = {
      success: true,
      msg: "",
      data: {v1: 1}
    };

    assert_comparar(res.getJson(), dataEsperado);


  });


  it('Error - ok', function () {

    res.reset();

    BuilderJsonResponse.Error(res, "un texto x");

    assert(500 === res.getStatus(), "El status es incorrecto");

    let dataEsperado = {
      success: false,
      msg: "un texto x"
    };

    assert_comparar(res.getJson(), dataEsperado);


  });


});

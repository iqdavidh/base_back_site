'use strict';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const RootAction = require("../../../src/controller/RootAction");

describe('RootAction_test', function () {

  it('debe retornar solo true', function () {

    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/'
    });

    const response = httpMocks.createResponse();

    RootAction(request, response);

    const data = response._getJSONData();

    assert( data.success === true, "Se esperaba respuesta success");
    assert( data.msg === "I'm backend", "El menssaje no es el correcto");

  });

});

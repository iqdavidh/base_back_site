'use strict';
const assert = require('assert');

const { mockReq, mockRes } = require('sinon-express-mock');


const routerLogin = require( "../../../src/loginController/routerLogin.js");

describe('routerLogin', async function () {

  it('login true true', function () {


    const request = {
      body: {
        foo: 'bar',
      },
    };

    const req = mockReq(request);
    const res = mockRes();

    routerLogin(req, res);


    assert(false,"");

  });

});

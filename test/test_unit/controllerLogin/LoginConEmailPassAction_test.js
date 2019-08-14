'use strict';
const httpMocks = require("node-mocks-http");


describe('LoginConEmailPassAction', async function () {

  it('G', function () {

    const mockRequest = httpMocks.createRequest({
      method: "POST",
      url: "/example"
    });
    const mockResponse = httpMocks.createResponse();

    exampleRouteHandler(mockRequest, mockResponse);

    assert(false,"");

  });

});

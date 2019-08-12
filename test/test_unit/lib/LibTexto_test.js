'use strict';

/**
 * Created by David on 18/07/2019.
 */

var assert = require('assert');
const LibTexto = require("../../../src/lib/LibTexto");

describe('UcFirst', function() {

	describe('prueba formas de texto, upper, mixto lower ', function() {

		it('Upper', function() {
			let r=LibTexto.Ucfirst("CASA");
			assert( "Casa" === r,"No coincide");
		});

		it('Lower', function() {
			let r=LibTexto.Ucfirst("casa");
			assert( "Casa" === r,"No coincide");
		});

		it('Mixto', function() {
			let r=LibTexto.Ucfirst("CaSa");
			assert( "Casa" === r,"No coincide");
		});

	});
});

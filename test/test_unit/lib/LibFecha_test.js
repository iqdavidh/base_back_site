'use strict';

/**
 * Created by David on 18/07/2019.
 */

var assert = require('assert');
const LibFecha = require("../../../src/lib/LibFecha");


describe('LibFecha', function() {

	describe('getDateFromFechaYMD', function() {

		it('fecha simple', function() {
			const fymd='2000-01-30';
			const d=LibFecha.getDateFromFechaYMD(fymd);

			assert(  2000 === d.getFullYear(),"No coincide year");
			assert(  0 === d.getMonth(),"No coincide mes");
			assert(  30 === d.getDate(),"No coincide fecha");
		});

	});


	describe('getDateFromFechaDMY', function() {

		it('fecha simple', function() {
			const fdmy='30/01/2000';
			const d=LibFecha.getDateFromFechaDMY(fdmy);

			assert(  2000 === d.getFullYear(),"No coincide year");
			assert(  0 === d.getMonth(),"No coincide mes");
			assert(  30 === d.getDate(),"No coincide fecha");
		});

	});

});

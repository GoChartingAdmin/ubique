var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/isnan ...');
test('isnan', function (done) {



assert.deepEqual(ubique.isnan(NaN),true);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->
var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/ndims ...');
test('ndims', function (done) {



assert.deepEqual(ubique.ndims([3,5,6]),2);
assert.deepEqual(ubique.ndims([[3,2,7],[4,5,6]]),2);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->
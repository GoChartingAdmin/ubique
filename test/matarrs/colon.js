var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/colon ...');
test('colon', function (done) {



assert.deepEqual(ubique.colon(1,10,1),[1,2,3,4,5,6,7,8,9,10]);
assert.deepEqual(ubique.colon(10,1,1),[]);
assert.deepEqual(ubique.colon(-5,5,2),[-5,-3,-1,1,3,5]);
assert.deepEqual(ubique.colon(-7,14,2),[-7,-5,-3,-1,1,3,5,7,9,11,13]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->
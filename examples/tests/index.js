const assert = require('assert');
const myModule = require('..');

assert.strictEqual(myModule.basics(), 35.0);

console.log('tests ok');

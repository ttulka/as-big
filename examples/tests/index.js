const assert = require('assert');
const myModule = require('..');

assert.strictEqual(myModule.basics(), 34.0);

console.log('tests ok');

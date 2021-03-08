const assert = require('assert');
const myModule = require('..');

const { __getString } = myModule;

assert.strictEqual(myModule.basics1(), 35.0);
assert.strictEqual(__getString(myModule.basics2()), '33.33334');
assert.strictEqual(!!myModule.basics3(), true);

console.log('tests ok');

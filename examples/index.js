const fs = require("fs");
const loader = require("@assemblyscript/loader");
const wasm = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), {});
module.exports = wasm.exports;

const { __getString } = wasm.exports;

console.log('Basics #0:', wasm.exports.basics0());
console.log('Basics #1:', wasm.exports.basics1());
console.log('Basics #2:', __getString(wasm.exports.basics2()));
console.log('Basics #3:', wasm.exports.basics3());

console.log('Pi constant (native):', (wasm.exports.pi_native(10000)));
console.log('Pi constant (Big):   ', __getString(wasm.exports.pi(10000, 100)));

console.log('Euler’s constant (native):', wasm.exports.euler_native(100));
console.log('Euler’s constant (Big):   ', __getString(wasm.exports.euler(100, 100)));

console.log('Rump’s Royal Pain (native):', wasm.exports.rump_native());
console.log('Rump’s Royal Pain (Big):   ', __getString(wasm.exports.rump()));

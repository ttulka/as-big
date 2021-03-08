const fs = require("fs");
const loader = require("@assemblyscript/loader");
const wasm = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), {});
module.exports = wasm.exports;

const { __getString } = wasm.exports;

console.log('Basics #1:', wasm.exports.basics1());
console.log('Basics #2:', __getString(wasm.exports.basics2()));
console.log('Basics #3:', wasm.exports.basics3());

console.log('Pi:', __getString(wasm.exports.pi(10000)));

console.log('Euler’s constant:', __getString(wasm.exports.euler(1000, 100)));

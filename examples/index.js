const fs = require("fs");
const loader = require("@assemblyscript/loader");
const wasm = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), {});
module.exports = wasm.exports;

console.log('basics:', wasm.exports.basics());

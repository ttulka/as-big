const { 
    Big, ofString, ofNumber, getDP, setDP,
    __getString, __newString, __pin, __unpin } = require('..');

// convenient functions for tests:
module.exports = {
  bigToString: x => bigToString(x),
  stringToNumber: x => bigToNumber(x),
  floatToNumber: x => bigToNumber(x),
  abs: x => unOp('abs', x),
  cmp: (x, y) => numBiOp('cmpBig', x, y),
  round: (x, dp = 0, rm = 1) => unOp('round', x, dp, rm),
  prec: (x, sd, rm = 1) => unOp('prec', x, sd, rm),
  plus: (x, y) => biOp('plusBig', x, y),
  minus: (x, y) => biOp('minusBig', x, y),
  times: (x, y) => biOp('timesBig', x, y),
  mod: (x, y) => biOp('modBig', x, y),
  pow: (x, n) => opNum('pow', x, n),
  div: (x, y) => biOp('divBig', x, y),
  divDP: (x, y, dp) => {
    const dpOrigin = getDP();
    setDP(dp);
    const res = biOp('divBig', x, y);
    setDP(dpOrigin);
    return res;
  },
};

[
    'toString',
    'toNumber',
    'cmp',
    'plus',
    'minus',
    'times',
    'div',
    'mod',
    'pow',
    'abs',
    'round',
    'prec'
    
].forEach(method => require('./' + method));

console.log('tests ok');

// glue functions:

function unOp(op, x, ...params) {
  const xPtr = __pin(ofString(__newString(x)));
  const xb = Big.wrap(xPtr);

  const resPtr = __pin(xb[op](...params));
  const resb = Big.wrap(resPtr);
  const res = __getString(resb.toString());

  __unpin(xPtr);
  __unpin(resPtr);
  
  return res;
}

function biOp(op, x, y) {
  const xPtr = __pin(ofString(__newString(x)));
  const xb = Big.wrap(xPtr);
  const yPtr = __pin(ofString(__newString(y)));
  const yb = Big.wrap(yPtr);

  const resPtr = __pin(xb[op](yb));
  const resb = Big.wrap(resPtr);
  const strPtr = resb.toString();
  res = __getString(strPtr);

  __unpin(xPtr);
  __unpin(yPtr);
  __unpin(resPtr);
  
  return res;
}

function opNum(op, x, n) {
  const xPtr = __pin(ofString(__newString(x)));
  const xb = Big.wrap(xPtr);
  const resPtr = __pin(xb[op](n));
  const resb = Big.wrap(resPtr);
  const res = __getString(resb.toString());
  __unpin(xPtr);
  __unpin(resPtr);
  return res;
}

function numBiOp(op, x, y) {
  const xPtr = __pin(ofString(__newString(x)));
  const xb = Big.wrap(xPtr);
  const yPtr = __pin(ofString(__newString(y)));
  const yb = Big.wrap(yPtr);

  const res = xb[op](yb);

  __unpin(xPtr);
  __unpin(yPtr);
  
  return res;
}

function bigToString(x) {
  const op = 'toString';
  const xPtr = __pin(typeof x === 'number' 
      ? ofNumber(x)
      : ofString(__newString(x + '')));
  const xb = Big.wrap(xPtr);
  const res = __getString(xb[op]());
  __unpin(xPtr);
  
  return res;
}

function bigToNumber(x) {
  const op = 'toNumber';
  const xPtr = __pin(typeof x === 'number' 
      ? ofNumber(x)
      : ofString(__newString(x + '')));
  const xb = Big.wrap(xPtr);
  const res = xb[op]();
  __unpin(xPtr);
  
  return res;
}
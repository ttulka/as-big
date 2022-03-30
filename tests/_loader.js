import { getDP, setDP, abs, cmp, plus, minus, times, div, mod, pow, sqrt, round, prec, toString, ntoString, toNumber, toExponential } from "../build/debug.js";

// convenient functions for tests:

const divDP = (x, y, dp) => {
  const dpOrigin = getDP();
  setDP(dp);
  try {
    return div(x, y);    
  } finally {
    setDP(dpOrigin);
  }
};

const roundDP = (x, dp = 0, rm = 1) => round(x, dp, rm);

const precSD = (x, sd, rm = 1) => prec(x, sd, rm);

const toExponentialDP = (x, dp = 0, rm = 1) => toExponential(x, dp, rm);

export { 
  getDP, setDP, abs, cmp, plus, minus, times, div, divDP, mod, pow, sqrt,
  roundDP as round, precSD as prec, toExponentialDP as toExponential,
  toString as bigToString, ntoString, toNumber as stringToNumber
};
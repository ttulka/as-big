import Big from './Big';
export { Big };

// convinience functions for working from JS:

export function ofString(n: string): Big {
  return Big.of(n);
}

export function ofNumber(n: number): Big {
  return Big.of(n);
}

export function getDP(): i32 {
  return Big.DP;
}

export function setDP(dp: i32): void {
  Big.DP = dp;
}

import Big from './Big';
export { Big };

// convinience functions for working with Big within JS:

export function getDP(): i32 {
  return Big.DP;
}

export function setDP(dp: i32): void {
  Big.DP = dp;
}

export function abs(x: string): string {
  return Big.of(x).abs().toString();
}

export function cmp(x: string, y: string): i8 {
  return Big.of(x).cmp(y);
}

export function plus(x: string, y: string): string {
  return Big.of(x).plus(y).toString();
}

export function minus(x: string, y: string): string {
  return Big.of(x).minus(y).toString();
}

export function times(x: string, y: string): string {
  return Big.of(x).times(y).toString();
}

export function div(x: string, y: string): string {
  return Big.of(x).div(y).toString();
}

export function mod(x: string, y: string): string {
  return Big.of(x).mod(y).toString();
}

export function pow(x: string, n: i32): string {
  return Big.of(x).pow(n).toString();
}

export function round(x: string, dp: i32, rm: u8): string {
  return Big.of(x).round(dp, rm).toString();
}

export function prec(x: string, sd: i32, rm: u8): string {
  return Big.of(x).prec(sd, rm).toString();
}

export function sqrt(x: string): string {
  return Big.of(x).sqrt().toString();
}

export function toExponential(x: string, dp: i32, rm: u8): string {
  return Big.of(x).toExponential(dp, rm).toString();
}

export function toString(x: string): string {
  return Big.of(x).toString();
}
export function ntoString(x: number): string {
  return Big.of(x).toString();
}

export function toNumber(x: string): number {
  return Big.of(x).toNumber();
}
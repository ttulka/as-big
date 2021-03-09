import Big from 'as-big/Big';

export function euler(n: i32 = 100, dp: i32 = 100): string {

    const DP = Big.DP;
    Big.DP = dp;

    let sum = Big.ZERO, 
        fac = Big.ONE;

    for (let i = 0; i < n; i++) {
        sum += Big.ONE / fac;
        fac *= Big.of(i + 1); 
    }

    Big.DP = DP;

    return sum.toString();
}

export function euler_native(n: i32 = 100): f64 {

    let sum = 0.0, 
        fac = 1.0;

    for (let i = 0; i < n; i++) {
        sum += 1 / fac;
        fac *= i + 1; 
    }
    return sum;
}

import Big from 'as-big/Big';

export function pi(limit: i32 = 1000, dp: i32 = 100): string {
    // Gregory-Leibniz series
    // Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

    const DP = Big.DP;
    Big.DP = dp;

    const four = Big.of(4);
    let pi = four;

    for (let i = 1; i < limit; i++) {
        const term = four.div(i * 2 + 1);
        pi += i % 2 === 1 ? -term : term;
    }

    Big.DP = DP;

    return pi.toString();
}

export function pi_native(limit: i32 = 1000): f64 {
    // Gregory-Leibniz series
    // Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

    let pi = 4.0;

    for (let i = 1; i < limit; i++) {
        const term = 4.0 / (i * 2 + 1);
        pi += i % 2 === 1 ? -term : term;
    }
    return pi;
}

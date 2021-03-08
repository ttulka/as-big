import Big from 'as-big/Big';

export function pi(limit: i32 = 1000): string {
    // Gregory-Leibniz series
    // Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

    const four = Big.of(4);
    let pi = Big.of(4 / 1);

    for (let i = 1; i < limit; i++) {
        const term = four.div(i * 2 + 1);
        pi += i % 2 === 1 ? -term : term;
    }
    return pi.toString();
}
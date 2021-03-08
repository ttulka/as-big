import Big from 'as-big/Big';

export function basics0(): number {
    
    return Big.of(0.1).plus(Big.of(0.2)).toNumber();
}

export function basics1(): number {

    let x = Big.of(42);
    let y = Big.of('13');
    
    let a = x + y;          // Big(55)
    // let a = x.plus(y);   // Big(55)
    
    let a0 = a.prec(1);     // Big(60)

    return (Big.TWO * Big.TWO + a0 / Big.TWO + Big.ONE).toNumber();
    // return (a0 + Big.TEN / Big.TWO).toNumber();
}

export function basics2(): string {

    let a = +Big.TEN;                   // Big(10)
    let b = a + Big.TWO - Big.ZERO;     // Big(12)
    let c = b * Big.of('1.5');          // Big(18)
    let d = c / Big.of('0.5');          // Big(36)
    let e = d % Big.of('26');           // Big(10)
    let f = e ^ 2;                      // Big(100)
    let g = -f.div(3);                  // Big(-33.33333333333333333333)
    let h = g.abs().round(5, 3);        // Big(33.33334)

    return h.toString();
}

export function basics3(): boolean {

    return Big.ONE > Big.ZERO && Big.TWO >= Big.ONE && Big.TWO < Big.TEN && Big.TEN <= Big.TEN;
}
import Big from 'as-big/Big';

export function basics(): number {

    let x = Big.of(42);
    let y = Big.of('13');
    
    let a = x + y;          // Big(55)
    // let a = x.plus(y);   // Big(55)
    
    let a0 = a.prec(1);     // Big(60)

    return (Big.TWO * Big.TWO + a0 / Big.TWO + Big.ONE).toNumber();
    // return (a0 + Big.TEN / Big.TWO).toNumber();
}
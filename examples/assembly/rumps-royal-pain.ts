import Big from 'as-big/Big';

// https://web.archive.org/web/20180729032331/http://arith22.gforge.inria.fr/slides/06-gustafson.pdf

const x = 77617.0, y = 33096.0;

export function rump(): string {

    const xb = Big.of(x);
    const yb = Big.of(y);
    
    const res = Big.of(333.75) * yb.pow(6) + xb.pow(2) * (Big.of(11) * xb.pow(2) * yb.pow(2) - yb.pow(6) - Big.of(121) * yb.pow(4) - Big.of(2)) + Big.of(5.5) * yb.pow(8) + xb / (Big.of(2) * yb);

    return res.toString();
}

export function rump_native(): f64 {

    return 333.75 * Math.pow(y, 6) + Math.pow(x, 2) * (11 * Math.pow(x, 2) * Math.pow(y, 2) - Math.pow(y, 6) - 121 * Math.pow(y, 4) - 2) + 5.5 * Math.pow(y, 8) + x / (2 * y);
}
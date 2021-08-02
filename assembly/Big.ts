/**
 * Representation of big decimals.
 * 
 * All operations are immutable.
 */
 export default class Big {

    /**
     * {Big} instance with the value zero {0}.
     */
    @lazy
    static readonly ZERO: Big = Big.zero();

    /**
     * {Big} instance with the value one {1}.
     */
    @lazy
    static readonly ONE: Big = Big.one();

    /**
     * {Big} instance with the value two {2}.
     */
    @lazy
    static readonly TWO: Big = Big.two();

    /**
     * {Big} instance with the value ten {10}.
     */
    @lazy
    static readonly TEN: Big = Big.ten();

    /**
     * {Big} instance with the value one half {0.5}.
     */
    @lazy
    static readonly HALF: Big = Big.half();

    /**
     * The positive exponent (PE) at and above which {toString} returns exponential notation.
     * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
     */
    static PE: i32 = 21;// 0 to 1000000

    /**
     * The negative exponent (NE) at and beneath which {toString} returns exponential notation.
     * -1000000 is the minimum recommended exponent value of a Big.
     */
    static NE: i32 = -7;    // 0 to -1000000

    /*
     * The maximum number of decimal places (DP) of the results of operations involving division:
     * div and sqrt, and pow with negative exponents.
     */
    static DP: i32 = 20;    // 0 to MAX_DP

    // The maximum value of DP and Big.DP.
    static readonly MAX_DP: i32 = 1000000;   // 0 to 1000000

    // The maximum magnitude of the exponent argument to the pow method.
    static readonly MAX_POWER: i32 = 1000000;    // 1 to 1000000

    /**
     * The default rounding mode (RM) used when rounding to the above decimal places.
     *
     *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
     *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
     *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
     *  3  Away from zero.                                  (ROUND_UP)
     */
    static RM: u8 = 1;  // 0, 1, 2 or 3

    /**
     * Default contructor. 
     * See {#of} for other options.
     *
     * @param s     // sign
     * @param e     // decimal point
     * @param c     // array of digits
     */
    constructor(private s: i8, private e: i32, private c: Array<u8>) {
    }

    /**
     * Returns a new {Big} instance from generic type {T}.
     * 
     * @param  n the number as {Big}, {string}, or {number}
     * @return the new {Big} instance
     */
    static of<T>(n: T): Big {
        if (n instanceof Big) return n;
        if (n instanceof string) return new BigOfString(n);
        if (n instanceof i8) return Big.of(n.toString());
        if (n instanceof u8) return Big.of(n.toString());
        if (n instanceof i16) return Big.of(n.toString());
        if (n instanceof u16) return Big.of(n.toString());
        if (n instanceof i32) return Big.of(n.toString());
        if (n instanceof u32) return Big.of(n.toString());
        if (n instanceof i64) return Big.of(n.toString());
        if (n instanceof u64) return Big.of(n.toString());
        if (n instanceof f32) return Big.of(n.toString());
        if (n instanceof f64) return Big.of(n.toString());

        throw new TypeError('Unsupported generic type ' + nameof<T>(n));
    }

    /**
     * Creates a new instance of {Big} from {Big} {x}.
     * 
     * @param x the {Big} instance to make a copy from
     */
    static copyOf(x: Big): Big {
        return new Big(x.s, x.e, x.c.slice());
    }

    /**
     * Creates a new instance of {Big} with the value {0} (zero).
     */
    static zero(): Big {
        const arr = new Array<u8>(1);
        unchecked(arr[0] = 0);
        return new Big(1, 0, arr);
    }

    /**
     * Creates a new instance of {Big} with the value {1} (one).
     */
    static one(): Big {
        const arr = new Array<u8>(1);
        unchecked(arr[0] = 1);
        return new Big(1, 0, arr);
    }

    /**
     * Creates a new instance of {Big} with the value {2} (two).
     */
    static two(): Big {
        const arr = new Array<u8>(1);
        unchecked(arr[0] = 2);
        return new Big(1, 0, arr);
    }

    /**
     * Creates a new instance of {Big} with the value {10} (ten).
     */
    static ten(): Big {
        const arr = new Array<u8>(1);
        unchecked(arr[0] = 1);
        return new Big(1, 1, arr);
    }

    /**
     * Creates a new instance of {Big} with the value {0.5} (half).
     */
    static half(): Big {
        const arr = new Array<u8>(1);
        unchecked(arr[0] = 5);
        return new Big(1, -1, arr);
    }

    /**
     * Return a new instance of {Big} with the negative value of this Big.
     */
    @operator.prefix('-')
    neg(): Big {
        return new Big(-this.s, this.e, this.c.slice());
    }

    /**
     * Return a new instance of {Big} with the value of this {Big}.
     */
    @operator.prefix('+')
    pos(): Big {
        return new Big(this.s, this.e, this.c.slice());
    }

    /**
     * Return true if the value of this {Big} is equal to the value of {Big} {y}, otherwise return false.
     * @param y the {y}
     */
    //@operator('==')
    eq<T>(y: T): boolean {
        return this.cmp(y) == 0;
    }

    @operator('==')
    eqBig(y: Big): boolean {
        return this.eq(y);
    }

    /**
     * Return true if the value of this {Big} is not equal to the value of {Big} {y}, otherwise return false.
     * @param y the {y}
     */
    //@operator('!=')
    neq<T>(y: T): boolean {
        return this.cmp(y) != 0;
    }

    @operator('!=')
    neqBig(y: Big): boolean {
        return this.neq(y);
    }

    /**
     * Returns true if the value of this {Big} is greater than the value of {Big} {y}, otherwise false.
     * @param y the {y}
     */
    //@operator('>')
    gt<T>(y: T): boolean {
        return this.cmp(y) > 0;
    }

    @operator('>')
    gtBig(y: Big): boolean {
        return this.gt(y);
    }

    /**
     * Returns true if the value of this {Big} is greater than or equal to the value of {Big} {y}, otherwise false.
     * @param y the {y}
     */
    //@operator('>=')
    gte<T>(y: T): boolean {
        return this.cmp(y) > -1;
    }

    @operator('>=')
    gteBig(y: Big): boolean {
        return this.gte(y);
    }

    /**
     * Returns true if the value of this {Big} is less than the value of {Big} {y}, otherwise false.
     * @param y the {y}
     */
    //@operator('<')
    lt<T>(y: T): boolean {
        return this.cmp(y) < 0;
    }

    @operator('<')
    ltBig(y: Big): boolean {
        return this.lt(y);
    }

    /**
     * Returns true if the value of this {Big} is less than or equal to the value of {Big} {y}, otherwise false.
     * @param y the {y}
     */
    //@operator('<=')
    lte<T>(y: T): boolean {
        return this.cmp(y) < 1;
    }

    @operator('<=')
    lteBig(y: Big): boolean {
        return this.lte(y);
    }

    /**
     * Returns 1 if the value of this {Big} is greater than the value of {Big} {y},
     *        -1 if the value of this {Big} is less than the value of {Big} {y}, or
     *         0 if they have the same value.
     * @param y the {y}
     */
    cmp<T>(y: T): i8 {
        const yb = y instanceof Big ? y : Big.of(y);
        let xc = this.c,
            yc = yb.c,
            xs = this.s,
            ys = yb.s,
            xe = this.e,
            ye = yb.e;

        // either zero?
        if (unchecked(!xc[0] || !yc[0])) return unchecked(!xc[0] ? !yc[0] ? 0 : -ys : xs);

        // signs differ?
        if (xs != ys) return xs;

        const isneg = xs < 0;

        // compare exponents
        if (xe != ye) return xe > ye ^ isneg ? 1 : -1;

        const e = (xe = xc.length) < (ye = yc.length) ? xe : ye;

        // compare digit by digit
        for (let i = -1; ++i < e;) {
            if (unchecked(xc[i] != yc[i])) return unchecked(xc[i] > yc[i] ^ isneg ? 1 : -1);
        }

        // compare lengths
        return xe == ye ? 0 : xe > ye ^ isneg ? 1 : -1;
    };

    cmpBig(y: Big): i8 {
        return this.cmp(y);
    }

    /**
     * Returns a new {Big} whose value is the absolute value of this {Big}.
     */
    abs(): Big {
        return new Big(1, this.e, this.c.slice());
    }

    /**
     * Returns a new {Big} whose value is the value of this {Big} plus the value of {Big} {y}.
     * @param y the {y}
     */
    //@operator('+')
    plus<T>(y: T): Big {
        let yb = y instanceof Big ? Big.copyOf(y) : Big.of(y);
        let e: i32, k: i32, t: Array<u8>,
            x = this;

        // signs differ?
        if (x.s != yb.s) {
            yb.s = -yb.s;
            return x.minus(yb);
        }

        let xe = x.e,
            xc = x.c,
            ye = yb.e,
            yc = yb.c;

        // either zero?
        if (unchecked(!xc[0] || !yc[0])) {
            if (unchecked(!yc[0])) {
                if (unchecked(xc[0])) {
                    yb = Big.copyOf(x);
                } else {
                    yb.s = x.s;
                }
            }
            return yb;
        }

        xc = xc.slice();

        // prepend zeros to equalise exponents
        // note: reverse faster than unshifts
        if (e = xe - ye) {
            if (e > 0) {
                ye = xe;
                t = yc;
            } else {
                e = -e;
                t = xc;
            }

            t.reverse();
            for (; e--;) t.push(0);
            t.reverse();
        }

        // point xc to the longer array
        if (xc.length - yc.length < 0) {
            t = yc;
            yc = xc;
            xc = t;
        }

        e = yc.length;

        let m: u8;
        // only start adding at yc.length - 1 as the further digits of xc can be left as they are
        for (m = 0; e; unchecked(xc[e] %= 10)) m = unchecked((xc[--e] = <u8>(xc[e] + yc[e] + m)) / 10 | 0);

        // no need to check for zero, as +x + +y != 0 && -x + -y != 0

        if (m) {
            xc.unshift(m);
            ++ye;
        }

        // remove trailing zeros
        for (e = xc.length; unchecked(xc[--e] === 0);) xc.pop();

        yb.c = xc;
        yb.e = ye;

        return yb;
    }

    @operator('+')
    plusBig(y: Big): Big {
        return this.plus(y);
    }

    /**
     * Returns a new {Big} whose value is the value of this {Big} minus the value of {Big} {y}.
     * @param y the {y}
     */
    //@operator('-')
    minus<T>(y: T): Big {
        let yb = y instanceof Big ? Big.copyOf(y) : Big.of(y);
        if (this.eq(yb)) return Big.ZERO;

        let i: i32, j: i32, t: Array<u8>, xlty: i32,
            x = this,
            xs = x.s,
            ys = yb.s;

        // signs differ?
        if (xs != ys) {
            yb.s = -ys;
            return x.plus(yb);
        }

        let xc = x.c.slice(),
            xe = x.e,
            yc = yb.c,
            ye = yb.e;

        // either zero?
        if (unchecked(!xc[0] || !yc[0])) {
            if (unchecked(yc[0])) {
                yb.s = -ys;
            } else if (unchecked(xc[0])) {
                yb = Big.copyOf(x);
            } else {
                yb.s = 1;
            }
            return yb;
        }

        let a: i32, b: i32;

        // determine which is the bigger number - prepend zeros to equalise exponents
        if (a = xe - ye) {
            if (xlty = a < 0) {
                a = -a;
                t = xc;
            } else {
                ye = xe;
                t = yc;
            }

            t.reverse();
            for (b = a; b--;) t.push(0);
            t.reverse();

        } else {
            // exponents equal - check digit by digit
            j = ((xlty = xc.length < yc.length) ? xc : yc).length;

            for (a = b = 0; b < j; b++) {
                if (unchecked(xc[b] != yc[b])) {
                    xlty = unchecked(xc[b] < yc[b]);
                    break;
                }
            }
        }

        // x < y? point xc to the array of the bigger number
        if (xlty) {
            t = xc;
            xc = yc;
            yc = t;
            yb.s = -yb.s;
        }

        // append zeros to xc if shorter - no need to add zeros to yc if shorter as subtraction only needs to start at yc.length
        if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;

        // subtract yc from xc
        for (b = i; j > a;) {
            if (unchecked(xc[--j] < yc[j])) {
                for (i = j; i && unchecked(!xc[--i]);) unchecked(xc[i] = 9);
                unchecked(--xc[i]);
                unchecked(xc[j] += 10);
            }

            unchecked(xc[j] -= yc[j]);
        }

        // remove trailing zeros
        for (; unchecked(xc[--b] === 0);) xc.pop();

        // remove leading zeros and adjust exponent accordingly
        for (; unchecked(xc[0] === 0);) {
            xc.shift();
            --ye;
        }

        if (unchecked(!xc[0])) {
            // n - n = +0
            yb.s = 1;

            // result must be zero
            xc = new Array<u8>(1);
            unchecked(xc[0] = 0);
            ye = 0;
        }

        yb.c = xc;
        yb.e = ye;

        return yb;
    }

    @operator('-')
    minusBig(y: Big): Big {
        return this.minus(y);
    }

    /**
     * Returns a new {Big} whose value is the value of this {Big} times the value of {Big} {y}.
     * @param y the {y}
     */
    //@operator('*')
    times<T>(y: T): Big {
        let yb = y instanceof Big ? Big.copyOf(y) : Big.of(y);
        let c: Array<u8>,
            x = this,
            xc = x.c.slice(),
            yc = yb.c,
            a = xc.length,
            b = yc.length,
            i = x.e,
            j = yb.e;

        // determine sign of result
        yb.s = x.s == yb.s ? 1 : -1;

        // return signed 0 if either 0
        if (unchecked(!xc[0] || !yc[0])) {
            yb.c = new Array<u8>(1);
            unchecked(yb.c[0] = 0);
            yb.e = 0;
            return yb;
        }

        // initialise exponent of result as x.e + y.e
        yb.e = i + j;

        // if array xc has fewer digits than yc, swap xc and yc, and lengths
        if (a < b) {
            c = xc;
            xc = yc;
            yc = c;
            j = a;
            a = b;
            b = j;
        }

        // initialise coefficient array of result with zeros
        for (c = new Array<u8>(j = a + b); j--;) unchecked(c[j] = 0);

        // Multiply

        // i is initially xc.length
        for (i = b; i--;) {
            b = 0;

            // a is yc.length
            for (j = a + i; j > i;) {

                // current sum of products at this digit position, plus carry
                b = unchecked(c[j] + yc[i] * xc[j - i - 1] + b);
                unchecked(c[j--] = u8(b % 10));

                // carry
                b = b / 10 | 0;
            }

            unchecked(c[j] = b as u8);
        }

        // increment result exponent if there is a final carry, otherwise remove leading zero
        if (b) ++yb.e;
        else c.shift();

        // remove trailing zeros
        for (i = c.length; unchecked(!c[--i]);) c.pop();
        yb.c = c;

        return yb;
    }

    @operator('*')
    timesBig(y: Big): Big {
        return this.times(y);
    }

    /**
     * Returns a new {Big} whose value is the value of this {Big} divided by the value of {Big} {y}, rounded,
     * if necessary, to a maximum of {Big.DP} decimal places using rounding mode {Big.RM}.
     * @param y the {y}
     */
    //@operator('/')
    div<T>(y: T): Big {
        let yb = y instanceof Big ? Big.copyOf(y) : Big.of(y);
        var x = this,
            a = x.c,    // dividend
            b = yb.c,   // divisor
            k: i8 = x.s == yb.s ? 1 : -1,
            dp = Big.DP;

        // divisor is zero?
        if (unchecked(!b[0])) {
            throw new Error('Division by zero');
        }

        // dividend is 0? return +-0
        if (unchecked(!a[0])) {
            yb.s = k;
            yb.c = new Array<u8>(1);
            unchecked(yb.c[0] = 0);
            yb.e = 0
            return yb;
        }

        let bl: i32, bt: i32, cmp: i32, ri: i32,
            bz = b.slice(),
            ai = bl = b.length,
            al = a.length,
            r = a.slice(0, bl),   // remainder
            rl = r.length,
            q = yb,               // quotient
            qc = q.c = [],
            qi = 0,
            p = dp + (q.e = x.e - yb.e) + 1;    // precision of the result

        q.s = k;
        let m = p < 0 ? 0 : p;

        // create version of divisor with leading zero
        bz.unshift(0);

        // add zeros to make remainder as long as divisor
        for (; rl++ < bl;) r.push(0);

        let n: u8;
        do {
            // n is how many times the divisor goes into current remainder
            for (n = 0; n < 10; n++) {
                // compare divisor and remainder
                if (bl != (rl = r.length)) {
                    cmp = bl > rl ? 1 : -1;

                } else {
                    for (ri = -1, cmp = 0; ++ri < bl;) {
                        if (unchecked(b[ri] != r[ri])) {
                            cmp = unchecked(b[ri] > r[ri]) ? 1 : -1;
                            break;
                        }
                    }
                }

                // if divisor < remainder, subtract divisor from remainder
                if (cmp < 0) {
                    // remainder can't be more than 1 digit longer than divisor
                    // equalise lengths using divisor with extra leading zero?
                    for (let ct = rl == bl ? b : bz; rl;) {
                        if (unchecked(r[--rl] < ct[rl])) {
                            ri = rl;
                            for (; ri && unchecked(!r[--ri]);) unchecked(r[ri] = 9);
                            unchecked(--r[ri]);
                            unchecked(r[rl] += 10);
                        }
                        unchecked(r[rl] -= ct[rl]);
                    }

                    for (; unchecked(!r[0]);) r.shift();

                } else {
                    break;
                }
            }

            // add the digit n to the result array
            qc[qi++] = cmp ? n : ++n;

            // update the remainder.
            if (unchecked(r[0]) && cmp) r[rl] = a.length > ai ? unchecked(a[ai]) : 0;
            else {
                r = new Array<u8>(1);
                unchecked(r[0] = a.length > ai ? a[ai] : 0);
            }

        } while ((ai++ < al || r.length >= 0) && m-- > 0);

        // leading zero? Do not remove if result is simply zero (qi == 1)
        if (unchecked(!qc[0]) && qi != 1) {
            // there can't be more than one zero
            qc.shift();
            q.e--;
            p--;
        }

        // round?
        if (qi > p) {
            return this.__round(q, p, Big.RM, r.length >= 0);
        }

        return q;
    }

    @operator('/')
    divBig(y: Big): Big {
        return this.div(y);
    }

    /**
     * Returns a new {Big} whose value is the value of this {Big} modulo the value of {Big} {y}.
     * @param y the {y}
     */
    //@operator('%')
    mod<T>(y: T): Big {
        let x = Big.copyOf(this),
            yb = y instanceof Big ? Big.copyOf(y) : Big.of(y);

        if (unchecked(!yb.c[0])) {
            throw new Error('Division by zero');
        }

        const xs = x.s,
            ys = yb.s;
        x.s = yb.s = 1;
        const ygtx = yb.cmp(x) == 1;
        x.s = xs;
        yb.s = ys;

        if (ygtx) return x;

        const a = Big.DP,
            b = Big.RM;
        Big.DP = Big.RM = 0;
        x = x.div(yb);
        Big.DP = a;
        Big.RM = b;

        return this.minus(x.times(yb));
    }

    @operator('%')
    modBig(y: Big): Big {
        return this.mod(y);
    }

    /**
     * Returns a {Big} whose value is the value of this {Big} raised to the power {n}.
     * If {n} is negative, round to a maximum of {Big.DP} decimal places using rounding mode {Big.RM}.
     *
     * @param n {i32}, {-MAX_POWER} to {MAX_POWER} inclusive.
     */
    @operator('^')
    pow(n: i32): Big {
        let x = this,
            one = Big.ONE,
            y = one,
            isneg = n < 0;

        if (n !== ~~n || n < -Big.MAX_POWER || n > Big.MAX_POWER) {
            throw new Error('Invalid exponent ' + n.toString());
        }

        if (isneg) n = -n;

        for (; ;) {
            if (n & 1) y = y.times(x);
            n >>= 1;
            if (!n) break;
            x = x.times(x);
        }

        return isneg ? one.div(y) : y;
    }

    sqrt(): Big {
        let x = this,
            e = x.e;

        // zero?
        if (unchecked(!x.c[0])) return Big.ZERO;

        // negative?
        if (x.s < 0) {
            throw new Error('No square root for negative numbers ' + this.toString());
        }

        // estimate  // TODO doesn't work well with built-in Math.sqrt
        // let f = F64.parseFloat(x.toString());
        // if (this.__validF64(x, f)) {
        //     return Big.of(Math.sqrt(f)).round(Big.DP);
        // }
        let r = x,
            t = r;

        e = r.e + (Big.DP += 4);

        // Newton-Raphson iteration
        do {
            t = r;
            r = t.plus(x.div(t)).times(Big.HALF).round(Big.DP);

        } while (t.c.slice(0, e).join('') != r.c.slice(0, e).join(''));

        return this.__round(Big.copyOf(r), (Big.DP -= 4) + r.e + 1);
    }

    /**
     * Returns a new {Big} whose value is the value of this {Big} rounded to a maximum precision of {sd}
     * significant digits using rounding mode {rm}, or {Big.RM} if {rm} is not specified.
     *
     * @param sd {i32} Significant digits: {1} to {MAX_DP} inclusive.
     * @param rm? {u8} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
     */
    prec(sd: i32, rm: u8 = Big.RM): Big {
        if (sd !== ~~sd || sd < 1 || sd > Big.MAX_DP) {
            throw new Error('Invalid precision ' + sd.toString());
        }
        return this.__round(Big.copyOf(this), sd, rm);
    }

    /**
     * Returns a new {Big} whose value is the value of this {Big} rounded to a maximum of {dp} decimal places
     * using rounding mode {rm}, or {Big.RM} if rm is not specified.
     * If {dp} is negative, round to an integer which is a multiple of {10**-dp}.
     * If {dp} is not specified, round to {0} decimal places.
     *
     * @param dp? {i32}, {-MAX_DP} to {MAX_DP} inclusive
     * @param rm? {u8} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up)
     */
    round(dp: i32 = 0, rm: u8 = Big.RM): Big {
        if (dp !== ~~dp || dp < -Big.MAX_DP || dp > Big.MAX_DP) {
            throw new Error('Invalid decimal places ' + dp.toString());
        }
        return this.__round(Big.copyOf(this), dp + this.e + 1, rm);
    }

    /**
     * Return a string representing the value of this {Big} in exponential notation rounded to {dp} fixed
     * decimal places using rounding mode {rm}, or {Big.RM} if rm is not specified.
     *
     * @param dp? {i32}, {-MAX_DP} to {MAX_DP} inclusive
     * @param rm? {u8} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up)
     */
    toExponential(dp: i32 = 0, rm: u8 = Big.RM): string {
        let x = this,
            n = unchecked(x.c[0]);

        if (dp !== ~~dp || dp < 0 || dp > Big.MAX_DP) {
            throw new Error('Invalid decimal places ' + dp.toString());
        }

        x = this.__round(Big.copyOf(x), ++dp, rm);
        for (; x.c.length < dp;) x.c.push(0);

        return x.__stringify(true, !!n);
    }

    /**
     * Converts this {Big} instance to {f64}.
     */
    toF64(): f64 {
        // check if conversion is possible
        const s = this.toString();
        const n = F64.parseFloat(s);

        if (!this.__validF64(this, n)) {
            throw new RangeError('Out of float64 range: ' + s);
        }

        return n;
    }

    /**
     * See {this.toF64}.
     */
    toNumber(): number {
        return this.toF64();
    }

    /**
     * Converts this {Big} instance to {string}.
     * 
     * @param radix currently ignored here
     */
    toString(radix: number = 10): string {
        if (radix && radix != 10) {
            throw new Error('Currently only radix 10 is supported: ' + radix.toString());
        }
        return this.__stringify(this.e <= Big.NE || this.e >= Big.PE, unchecked(!!this.c[0]));
    }

    // Mutates the instance {x}.
    __round(x: Big, sd: i32 = 0, rm: u8 = Big.RM, more: boolean = false): Big {
        let xc = x.c;

        if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
            throw new Error('Invalid rounding mode ' + rm.toString());
        }

        if (sd < 1) {
            more = unchecked(
                rm === 3 && (more || !!xc[0]) || sd === 0 && (
                    rm === 1 && xc[0] >= 5 ||
                    rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc.length > 1))
                )
            );

            xc.length = 1;

            if (more) {
                // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                x.e = x.e - sd + 1;
                unchecked(xc[0] = 1);

            } else {
                // zero
                unchecked(xc[0] = 0);
                x.e = 0;
            }
        } else if (sd < xc.length) {
            // xc[sd] is the digit after the digit that may be rounded up.
            more = unchecked(
                rm === 1 && xc[sd] >= 5 ||
                rm === 2 && (xc[sd] > 5 || xc[sd] === 5 &&
                    (more || xc.length > sd + 1 || xc[sd - 1] & 1)) ||
                rm === 3 && (more || !!xc[0])
            );

            // remove any digits after the required precision
            xc.length = sd--;

            // round up?
            if (more) {
                // rounding up may mean the previous digit has to be rounded up
                for (; sd >= 0 && unchecked(++xc[sd] > 9);) {
                    unchecked(xc[sd] = 0);
                    if (!sd--) {
                        ++x.e;
                        xc.unshift(1);
                    }
                }
            }
            // remove trailing zeros
            for (sd = xc.length; --sd >= 0 && unchecked(!xc[sd]);) xc.pop();
        }

        return x;
    }

    __stringify(doExponential: boolean, isNonzero: boolean): string {
        let e = this.e;
        let str = this.c.join(''),
            len = str.length;

        if (doExponential) {
            str = str.charAt(0) + (len > 1 ? '.' + str.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e.toString();

        } else if (e < 0) {
            for (; ++e;) str = '0' + str;
            str = '0.' + str;

        } else if (e > 0) {
            if (++e > len) {
                for (e -= len; e--;) str += '0';
            } else if (e < len) {
                str = str.slice(0, e) + '.' + str.slice(e);
            }
        } else if (len > 1) {
            str = str.charAt(0) + '.' + str.slice(1);
        }

        return this.s < 0 && isNonzero ? '-' + str : str;
    }

    __validF64(x: Big, n: f64): boolean {
        return x == Big.of(n);
    }
}

/**
 * String decorator for creating a new {Big} from a {string}.
 */
@final
class BigOfString extends Big {

    /**
     * Constructs from a {string}.
     * @param n the value as {string}
     */
    constructor(n: string) {
        let xs: i8;
        let xe: i32;
        let xc: Array<u8>;

        let i: i32 = 0, e: i32 = 0;

        n = n.toLowerCase();

        // valid number?
        BigOfString.validate(n);

        // determine sign
        if (n.charAt(0) == '+') n = n.slice(1);
        xs = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

        // decimal point?
        if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');

        // exponential form?
        if ((i = n.indexOf('e')) > 0) {
            if (e < 0) e = i;
            e += I32.parseInt(n.slice(i + 1));
            n = n.substring(0, i);

        } else if (e < 0) {
            e = n.length;
        }

        let len = n.length;

        // determine leading zeros
        for (i = 0; i < len && n.charAt(i) == '0';) ++i;

        // zero
        if (i === len) {
            xc = new Array<u8>(1);
            unchecked(xc[0] = 0);
            xe = 0;
            xs = 1;

        } else {
            // determine trailing zeros
            for (; len > 0 && n.charAt(--len) == '0';);
            xe = e - i - 1;

            xc = new Array<u8>(len - i + 1);

            // convert string to array of digits without leading/trailing zeros.
            for (e = 0; i <= len;) unchecked(xc[e++] = U8.parseInt(n.charAt(i++)));
        }

        super(xs, xe, xc);
    }

    /**
     * Validates the {string} to be a valid number format.
     * 
     * @param n the number candidate as {string}
     * @throws {TypeError} when not valid
     */
    static validate(n: string): void {
        let e = false, enow = false, nums = false, point = false;
        for (let i = 0; i < n.length; i++) {
            const c = n.charAt(i);

            if ((c == '-' || c == '+') && (i == 0 || enow)) {
                continue;
            }
            if (c == '.' && !point && !e) {
                point = true;
                continue;
            }
            if (c == 'e' && nums && !e) {
                e = true;
                enow = true;
                continue;
            }

            const x = U8.parseInt(c);
            if (x == 0 && c != '0' || !Number.isFinite(x)) {
                throw new TypeError('Invalid value `' + c + '` in ' + n);
            }

            enow = false;
            nums = true;
        }
    }
}

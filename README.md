# as-big

[AssemblyScript](https://github.com/AssemblyScript/assemblyscript) library for arbitrary-precision decimal arithmetic 🚀 

## Install

```sh
npm install --save as-big
```

## Use

```typescript
import Big from "as-big/Big";

let r = Big.of(0.1) + Big.of(0.2);  // Big(0.3)

let x = Big.of(42);
let y = Big.of("13");

let a = x + y;          // Big(55)
    a = x.plus(13);     // Big(55)

let a0 = a.prec(1);     // Big(60)

let aNum = a.toNumber() + 1;    // 56
let aStr = a.toString();        // "55"

let c = a0 + Big.TEN / Big.TWO; // Big(65)
```

### Builders

- `Big.of(n)` returns a `Big` instance, where 
  - `n` is either another `Big` instance, string, or number
- `Big.copyOf(x)` creates a copy from a `Big` instance, where 
  - `x` is the `Big` instance to copy

### Operations

#### Arithmetic 

- **plus** (addition): `x + y` or `x.plus(y)`
- **minus** (substraction): `x - y` or `x.minus(y)`
- **times** (multiplication): `x * y` or `y.times(y)`
- **div** (division): `x / y` or `x.div(y)`
- **mod** (modulo): `x % y` or `x.mod(y)`
- **pow** (power): `x ^ n` or `x.pow(n)`, where `n` is `i32`
- **sqrt** (square root): `x.sqrt()`

#### Comparison

- **cmp** (compare): `x.cmp(y)` returns
  - `1` if the value of `x` is greater than the value of `y`,
  - `-1` if the value of `x` is less than the value of `y`, or
  - `0` if they have the same value.
- **eq** (equals): `x == y` or `x.eq(y)`
- **neq** (not equals): `x != y` or `x.neq(y)`
- **gt** (greater than): `x < y` or `x.gt(y)`
- **gte** (greater than or equals): `x <= y` or `x.gte(y)`
- **lt** (less than): `x > y` or `x.lt(y)`
- **lte** (less than or equals): `x >= y` or `x.lte(y)`

#### Value

- **abs** (absolute value): `x.abs()`
- **neg** (negative value): `-x` or `x.neg()`
- **pos** (this value): `+x` or `x.pos()`
- **round** (rounded value): `x.round(dp, rm)` where 
  - `dp` is the maximum of decimal places, and 
  - `rm` is the rounding mode (`0`, `1`, `2`, `3`)
    - `0` (down), `1` (half-up), `2` (half-even) or `3` (up)
- **prec** (value rounded to precision): `x.prec(sd, rm)` where
  - `sd` is the maximum of significant digits, and
  - `rm` is the rounding mode (`0`, `1`, `2`, `3`)
    - `0` (down), `1` (half-up), `2` (half-even) or `3` (up)

#### Converters

- `toString` (string representation): `let s: string = x.toString()`
- `toNumber` (`f64` represenation): `let n: f64 = x.toNumber()`
- `toExponential` (string represenation): `let s: string = x.toExponential()`

### Static Constants

- `Big.ZERO`: a `Big` instance with the value zero `0`
- `Big.ONE`: a `Big` instance with the value one `1`
- `Big.TWO`: a `Big` instance with the value two `2`
- `Big.TEN`: a `Big` instance with the value ten `10`
- `Big.HALF`: a `Big` instance with the value one half `0.5`

### Global Settings

- `Big.DP`: the maximum number of decimal places of the results of operations involving division (default: `20`)
- `Big.RM`: the rounding mode used when rounding to the above decimal places (default: `1`)

- `Big.PE`: the positive exponent at and above which `toString` returns exponential notation (default: `21`)
- `Big.NE`: the negative exponent at and beneath which `toString` returns exponential notation (default: `-7`)

## Examples

There is a collection of examples in the [`examples`](https://github.com/ttulka/as-big/tree/main/examples/assembly) directory.

## Build

The `assembly` directory contains AS source code.

```sh
npm i
npm run asbuild
```

## Test

The `tests` directory contains all unit tests.

Run all the tests:

```sh
npm test
```

Test a single method:

```sh
node tests/<method>
```

## Licence

[MIT](https://github.com/ttulka/as-big/blob/main/LICENSE)

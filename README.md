# AS big

AssemblyScript library for arbitrary-precision decimal arithmetic.

Highly inspired by [https://github.com/MikeMcl/big.js](big.js)

## Install

```sh
npm install as-big --save-dev
```

## Use

```typescript
import Big from 'as-big/Big';

let x = Big.of(42);
let y = Big.of('13');

let a = x + y;          // Big(55)
// let a = x.plus(y);   // Big(55)

let a0 = a.prec(1);     // Big(60)

let aNum = a.toNumber() + 1;    // 56
let aStr = a.toString();        // "55"
```

## Build

The `assembly` directory contains AS source code.

```sh
npm i
npm run asbuild
```

## Test

The `tests` directory contains unit all tests.

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

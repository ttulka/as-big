import { 
    basics0, basics1, basics2, basics3,
    pi, pi_native,
    euler, euler_native, 
    rump, rump_native
} from "./build/release.js";

export { basics0, basics1, basics2, basics3 };

console.log('Basics #0:', basics0());
console.log('Basics #1:', basics1());
console.log('Basics #2:', basics2());
console.log('Basics #3:', basics3());

console.log('Pi constant (native):', pi_native(10000));
console.log('Pi constant (Big):   ', pi(10000, 100));

console.log('Euler’s constant (native):', euler_native(100));
console.log('Euler’s constant (Big):   ', euler(100, 100));

console.log('Rump’s Royal Pain (native):', rump_native());
console.log('Rump’s Royal Pain (Big):   ', rump());

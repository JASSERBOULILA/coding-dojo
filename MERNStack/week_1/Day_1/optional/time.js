// the 10,000th prime
// const { performance } = require('perf_hooks');

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;
//     if (n % 2 === 0 || n % 3 === 0) return false;

//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// const start = performance.now();
// let primeCount = 0;
// let num = 2;

// while (primeCount < 1e4) {
//     if (isPrime(num)) {
//         primeCount++;
//     }
//     num++;
// }

// console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// // the 10,000th prime*
// the 100,000th prime number
const { performance } = require('perf_hooks');
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

const start = performance.now();
let primeCount = 0;
let num = 2;
while (primeCount < 1e5) {
    if (isPrime(num)) {
        primeCount++;
    }
    num++;
}

console.log(`The 100,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

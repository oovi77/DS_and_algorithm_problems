/*
Problem Description, write a function that calculates the sum
of all numbers from 1 up to (and including) some number n.

*/

//for loop solution
function sum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum+=i;
    }
    return sum;
}

let t3 = performance.now();
sum(1000000000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) /1000} seconds.`);

//better solution
function sum2(n) {
    return n * (n+1) / 2;
}

let t1 = performance.now();
sum2(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) /1000} seconds.`);

function isPrime(x) {
    for (let i = 2; i < x; i++) {
        if(x % i === 0) {
            return false;
        }
    }
    return true;
}


function Prime (n) {
    let arr1 = []
    for (let i = 2; i <= n; i++) {
        if(isPrime(i)) {
            arr1.push(i);
        }
    }
    console.log(arr1);
}





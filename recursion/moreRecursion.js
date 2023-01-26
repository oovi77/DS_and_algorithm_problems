/*
Here are a bunch of simple recursion problems

*/

/* !!------Factorial-------

Write a function factorial which accepts a number and returns
the factorial of that number. A factorial is the product of an
integer and all the integers below it; e.g., factorial four ( 4! ) is 
equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.


*/

/*
function factorial(num) {
    if(num === 0) {
        return 1;
    }

    return num * factorial(num-1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));

*/


//Product of Array

/*
Write a function called productOfArray which takes in an array
of numbers and returns the product of them all.

*/

/*
function productOfArray(arr) {

    if(arr.length === 0) {
        return 1;
    }

    return arr[0] * productOfArray(arr.slice(1));


}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

*/

// !! ----  Recursive Range

/*

Write a function called recursiveRange which accepts a number
and adds up all the numbers from 0 to the number passed to the function 


*/

/*
function recursiveRange(num) {
    if(num === 0) {
        return 0;
    }
    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));

*/

// ! ---  Fibonacci Sequence

/*
function fib(num) {

    let fibN = 0;

    function nextFib(n, n1, n2) {

        let total = n1 + n2;

        if(n === num-1) {
            return n1;
        }
        //console.log(`n1: ${n1}, n2: ${n2}, n: ${n} , total: ${total}`);

        return 0 + nextFib(n+1,n2, total);
        
    }
    
    fibN = nextFib(0, 1, 1);
    return fibN;
}
*/

function fib(n) {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

/*
n = 6
if (n <=2 ) its not, n = 6
return fib(n-1) + fib(n-2)
fib(6 - 1), =  fib(5)
fib(5)
fib(5) => fib(4) + fib()

*/


console.log(fib(5));  //8
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));



// 1, 1, 2, 3, 5, 8
// 4 -> 3


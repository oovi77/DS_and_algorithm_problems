
//plain old recursive solution

/*
function fib(n) {
    if(n === 1 || n === 2) return 1; //could be n <= 2
    return fib(n-1) + fib(n-2);
}*/


//memoization solution
/*
function fib(n, memo=[]) {  //by default our memory array is empty []
    if(memo[n] !== undefined) return memo[n];  //if we've already done the calculation
                                               //before, return it right away

    if(n <= 2) return 1;  //base case
    let res = fib(n-1, memo) + fib(n-2, memo);  //same recursive call, except we pass
                                                //our array with it
    memo[n] = res;
    return res;
} */


//tabulated solution

function fib(n) {
    if(n <= 2) return 1;
    let fibNums = [0, 1, 1]; //array / table where we store our data
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]; //built up fib sequence from
                                                  //buttom-up
    }
    return fibNums[n];
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
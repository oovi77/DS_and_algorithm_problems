/* function countDown(num) {
    if(num <= 0) {
        console.log('All done!');
        return;
    }

    console.log(num);
    num--;
    countDown(num);
}

countDown(5);

*/

/*
function factorial (num) {
    let total = 1;
    for(let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}*/

/*
function factorial(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
} */

//writing factorial recursively

/*
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}



console.log(factorial(4)); */

/*
function collectOddValues(arr) {

    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }
    
    helper(arr);
    return result;  
    
} */

//same function as above but with pure recursion instead of a helper

/*
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    //note that .concat when you concatenate something with an empty array
    //the empty array goes away
    return newArr;
}

console.log([1,2].concat([]));

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

*/



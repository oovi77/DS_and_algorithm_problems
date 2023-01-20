/*
Write a function called maxSubArraySum which accepts an array 
of integers and a number called n. The function should calculate the max 
sum of n consecutive elements in the array

*/

function maxSubArraySum(arr, num) {
    if(num > arr.length) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        console.log(`$tempsum is: ${tempSum}`);  //8, 9, 15, 11, 14
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

//console.log(maxSubArraySum([1, 2,5,2,8,1,5],2)); //10
console.log(maxSubArraySum([1, 2,5,2,8,1,5],3)); //15

/*

Write a function called minSubArrayLen which accepts two parameters - 
an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which
the sum is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.

Examples:

    minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)

Space Complexity - O(1)

*/

function minSubArrayLen(arr1, sum) {

    if(arr1.length < 1) {
        return 0;
    }

    let start = 0;
    let end = 1;
    let mLength = Infinity;
    let tempL = 0;

    let total = arr1[start] + arr1[end];
    
    while (start <= end && end < arr1.length) {

        //let total = arr1[start] + arr1[end]; //total doesn't work how I think it does
        //need to be moving the 'window' as this stuff is happening
        tempL = end - start + 1;

        //console.log(`total: ${total}, tempL: ${tempL}`);

        if(total >= sum) {
            if(tempL <= mLength) {
                mLength = tempL;
            }
            //mLength = end - start;
            total = total - arr1[start]
            start++;
            //total = total + arr1[end]; //work on this 
            
        } else if (total < sum) {
            end++;
            total = total + arr1[end];
        }

    }
    if (mLength === Infinity) {
        return 0;
    } else {
        return mLength;
    }
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0




/*
minSubArrayLen([2,3,1,2,4,3], 7)
[2, 3] = 5, less than 7, so add next num
[2, 3, 1] = 6, less than 7, so add next
[2, 3, 1, 2] = 8, more than 7 
temp = [2, 3, 1, 2]
[3, 1, 2] = 6, less than 7, add next
[3, 1, 2, 4] = 10 , more than 7 remove 
[1, 2, 4] = 7,  [1, 2, 4] is smaller than [2, 3, 1, 2] so temp = [1, 2, 4]
[1, 2, 4] , remove 1 since it equals 7
[2, 4] = 6, so add 1
[2, 4, 3] = 10, more then 7 so remove 1
[4, 3] = 7, compare to temp, so temp = [4, 3]


*/

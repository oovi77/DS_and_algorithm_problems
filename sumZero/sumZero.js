/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a 
pair does not exist

*/

function sumZero(arr) {
    let sum = 0;
    let right = arr.length - 1;
    let left = 0;

    while (left < right) {
        if(arr[left] + arr[right] === sum) {
            return [arr[left], arr[right]];
        } else if (arr[left] + arr[right] > 0) {
            right--;
        } else {
            left++;
        }
        //console.log(`left: ${left}, right: ${right}`);
    }

    return undefined;

}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3 , 4, 5])) // [-3, 3]

/*
first -3 + 5 = 2, since its plus move the right pointer down -- to 4
-3 + 4 = 1, move right pointer down -- to 3 done, -3 + 3 = 0
*/


console.log(sumZero([-2, -1, 0, 1, 4, 5])) // [-1, 1]

/*
-2 + 5 = 3 right --
-2 + 4 = 2 right --
-2 + 1 = -1  left ++
-1 + -1 = 0, done
*/
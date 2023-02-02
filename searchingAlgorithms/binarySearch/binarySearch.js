/*
Write a function called binarySearch which accepts
a sorted array and a value and returns the index at
which the value exists. Otherwise, return -1. 

*/


/*
function binarySearch(arr, val) {

    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((right + left) / 2);

    console.log(`left: ${left}, middle: ${middle}, right: ${right}`);

    while(arr[middle] !== val && left <= right) {

        if(arr[middle] === val) {
            console.log(`left: ${left}, middle: ${middle}, right: ${right}`);
            return middle;
        } else if (arr[middle] < val) {
            left = middle + 1;
            middle = Math.floor((right + left) / 2);
        } else if (arr[middle] > val) {
            right = middle - 1;
            middle = Math.floor((right + left) / 2);
        }

        console.log(`left: ${left}, middle: ${middle}, right: ${right}`);
    }
    if(arr[middle] === val) {
        return middle;
    }



    return -1;

} */


// look for 9
// 1 2 3 4 5 6 7 8 9 10
// pick 5, 5 < 9 so pos 4 + 9 = 13 / 2 = 6
// pick 7, 7 < 9, so pos 6 + 10 = 16 / 2 = 8
// pick 9


//temp = Math.floor((10 - 3) / 2);
//console.log(temp);


//less lines of code binary search:

function binarySearch(arr, elem)  {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== elem && start <=end) {
        if(elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end)/2);
    }
    return arr[middle] === elem ? middle : -1;
}



console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],10)); // 9
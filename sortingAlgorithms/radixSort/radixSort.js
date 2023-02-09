/*radix sort

helper function getDigit (num, place)
-returns the specific digit of a num at the given place value
*/

/*
function getDigit(num, place) {

    let count = 0;

    num = num.toString();
    num = Array.from(num);

    return num[num.length - place];

} */

//alternate digitCount that uses math instead of strings
/*
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
} */

//alternate mostDigits
/*
function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount([nums[i]]));
    }
    return maxDigits;
} */



//alternate getDigit func

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

    //divide the absolute value of num by 10 to the power of i to get to the 
    //number you want with the digit at the end
    //mod % 10 it to get the rightmost digit
    //ex: 12345 , I want the 1st digit (which is 4)
    // 12345 / 10 = 1234.5 floor it => 1234
    // 1234 % 10 => 4
}



//returns the number of digits in a number
function digitCount(num) {
    return (Array.from((Math.abs(num)).toString())).length;

}


//given an array of numbers, returns the number of digits in the largest
//numbers in the list

function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        let count = digitCount(nums[i]);

        if(count > maxDigits) {
            maxDigits = count;
        }
       
    }
    return maxDigits;
}

/*
console.log(mostDigits([1234, 56, 7]));  //4
console.log(mostDigits([1, 1, 11111, 1])); //5
console.log(mostDigits([12, 34, 56, 788])); //3
*/

function radixSort(nums) {

    let maxDigitCount = mostDigits(nums);
    
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []); //creates an array 10 
        //empty arrays
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k); //get the digit of each number
            digitBuckets[digit].push(nums[i]);  //put the number into its appropriate
            //bucket based on its digit
        }
        nums = [].concat(...digitBuckets); //need the ... operator or else we would
        //have an array of arrays which we would need to break up
    }
    return nums;
}


/*
function radixSort(arr) {
    let numDigits = mostDigits(arr);
    let buckets = [[], [], [],  [], [], [],  [], [], [], [] ];

    for (let i = 0; i <= numDigits; i++) {
        //let buckets = [[], [], [],  [], [], [],  [], [], [], [] ];

        console.log(`arr[i]: ${arr[i]}, i: ${i}`);
        let digit = getDigit(arr[i], i);
        console.log(`digit: ${digit}`);
        
        buckets[digit].push(arr[i]);

        //arr = buckets.flat();
        console.log(buckets);


    }
    //console.log(buckets);
    //arr = buckets.flat();


    return arr;
} */

console.log(radixSort([55, 1, 7, 24, 0, 666, 44]));
//console.log(getDigit(1, 1));

/*
console.log(digitCount(1));
console.log(digitCount(22));
console.log(digitCount(-55555));
*/

/*
console.log(12345 / 10);
console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5));
*/


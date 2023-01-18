/*
Write a function called same, which accepts two arrays.
The function should return true of every value in the array
has its corresponding value squared in the second array.
The frequency of values must be the same.

*/

/*
In own words, take in two arrays, check if each value of first array when squared is
in the second array, and the number of times it shows up in the second array should
be the same as the number of times it shows up in the first array (frequency)
must be the same

*/

function same(arr1, arr2) {
    //first check that length of arrays are the same as quick test
    if (arr1.length !== arr2.length) {
        return false;
    }
    let counter = {};
    let double = {};

    for (let i in arr1) {
        if(counter[arr1[i]]) {
            counter[arr1[i]]++;
        } else {
            counter[arr1[i]] = 1;
        }
    }

    for (let j in arr2) {
        if(double[arr2[j]]) {
            double[arr2[j]]++;
        } else {
            double[arr2[j]] = 1;
        }
    }

    for (let x in counter) {
       if(counter[x] !== double[x**2]) {
        return false;
       }
    }






    //the second for loop wasn't working as expected
    /*
        for (let j in arr2) {
            if(arr1[i]**2 === arr2[j]) {
                if(counter[`s${arr2[j]}`]) {
                    counter[`s${arr2[j]}`]++;
                } else {
                    counter[`s${arr2[j]}`] = 1;
                }
            }
        }
    */
    

    //console.log(counter);
    //console.log(double);

    return true;

}

/* console.log(same([1, 1, 1, 2, 3, 2], [4, 1, 4, 9, 1, 1])); //true
console.log(same([1,2,3], [4, 1, 9]));  //true
console.log(same([1,2,3], [1, 9]));   //false
console.log(same([1,2,1], [4, 4, 1]));   //false
console.log(same([1,2,1], [4, 1, 1]));  //true */

/* 
function same1 (arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2) //look in 2nd array and find
        //the index of a number in the first array squared
        if (correctIndex === -1) {
            return false;
        }

        arr2.splice(correctIndex, 1);  //remove the number from the 2nd array 
        
    }
    return true;
} */

/* console.log(same1([1, 1, 1, 2, 3, 2], [4, 1, 4, 9, 1, 1])); //true
console.log(same1([1,2,3], [4, 1, 9]));  //true
console.log(same1([1,2,3], [1, 9]));   //false
console.log(same1([1,2,1], [4, 4, 1]));   //false
console.log(same1([1,2,1], [4, 1, 1]));  //true

temp = {}

console.log(temp[1]);
console.log (undefined || 0); // 0
temp[1] = 2;  
console.log(temp);   // {1: 2}
console.log(temp[1] || 0);    //  2 || 0   => 2; */


//better looking refactored version??

function same1(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    //console.log(frequencyCounter1);
    //console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same1([1,2,3,2,5], [9,1,4,4,11])); // false
console.log(same1([1, 1, 1, 2, 3, 2], [4, 1, 4, 9, 1, 1])); //true
console.log(same1([1,2,3], [4, 1, 9]));  //true
console.log(same1([1,2,3], [1, 9]));   //false
console.log(same1([1,2,1], [4, 4, 1]));   //false
console.log(same1([1,2,1], [4, 1, 1]));  //true

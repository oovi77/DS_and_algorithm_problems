/*
the first part of merge sort
this function will take two arrays which are
already sorted and then merge them together

*/

function mergeArr(arr1, arr2) {

    mArray = [];

    let p1 = 0;
    let p2 = 0;

    while(p1 != arr1.length && p2 != arr2.length ) {
        if(arr1[p1] <= arr2[p2]) {
            mArray.push(arr1[p1]);
            p1++;
        } else {
            mArray.push(arr2[p2]);
            p2++;
        }
        //console.log(mArray);
    }
    //console.log(`**** p1: ${p1}, p2: ${p2}`);
    if(p1 === arr1.length && p2 != arr2.length) {
        for(; p2 < arr2.length; p2++) {
            mArray.push(arr2[p2]);
        }
        return mArray;
    } 
    if(p2 === arr2.length && p1 != arr1.length) {
        for(; p1 < arr1.length; p1++) {
            mArray.push(arr1[p1]);
        }
        return mArray;
    } 
    return mArray;
    
}

//better version of merge

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }



    return results;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(merge([1], [2, 14, 99, 100]));
console.log(merge([2, 14, 99, 100], [2, 99]));
console.log(merge([2, 14, 99, 100], [1]));
console.log(merge([2, 14, 99, 100], []));
function merge(arr1, arr2) {
    let results = [];
    let i = 0;  //two pointers that both start at the 
    let j = 0;  //beginning of arr1 and arr2

    while(i < arr1.length && j < arr2.length) {   //while we haven't reached the end of the array
        if(arr2[j] > arr1[i]) {    //we compare the smallest number in each array and whichever is smallest gets added to the new results array
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    //if we reach the end of one array we just add the remainder of the other array
    //to the sorted results array

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

function mergeSort(arr) {

    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2); //gives us the half point of the array
    let left = mergeSort(arr.slice(0, mid));  //splits the array into two pieces, the left side
    let right = mergeSort(arr.slice(mid));   //and the right side
    return merge(left, right); //merge the two arrays

}


console.log(mergeSort([10, 24, 76, 73]));







/*
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(merge([1], [2, 14, 99, 100]));
console.log(merge([2, 14, 99, 100], [2, 99]));
console.log(merge([2, 14, 99, 100], [1]));
console.log(merge([2, 14, 99, 100], []));

*/
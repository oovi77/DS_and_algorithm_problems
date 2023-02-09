//Quick Sort sorting algorithm


//helper function pivot for quick sort algorithm

/*
function pivot(arr, start = 0, end = arr.length + 1) {
    let pivotIdx = 0;
    let pivotVal = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(pivotVal > arr[i]) {
            pivotIdx++;
            let temp = arr[i];
            arr[i] = arr[pivotIdx];
            arr[pivotIdx] = temp;
        }
    }
    let temp = arr[0];
    arr[0] = arr[pivotIdx];
    arr[pivotIdx] = temp;
    console.log(`array: ${arr}`);
    return pivotIdx;
}  */

//better version of pivot
function pivot (arr, start = 0, end = arr.length-1) {
    let pivot = arr[start];
    let swapIdx = start;

    //function for swapping two variables

    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    //start our for loop at the second element (so start + 1) because we 
    //are comparing everything to the initial element (which is our pivot)
    //no point in comparing the pivot to itself

    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        } 
    }
    swap(arr, swapIdx, start);
    console.log(`arr is: ${arr}`);
    return swapIdx;

}

//assume example quickSort([4, 6, 9, 1, 2, 5, 3])
function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right); //3
        //left
        quickSort(arr, left, pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1,right);
    }
    return arr;
}

console.log(quickSort([4, 6, -9, 1, 2, 5, 3]));


//console.log(pivot([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18], 0, 12));
//console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
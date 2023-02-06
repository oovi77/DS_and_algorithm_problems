
/*
function bubbleSort(arr) {

    for(let i = arr.length-1; i > 0; i--) {
        for(let j = 0; j <= i - 1; j++) {
            //console.log(arr);
            if(arr[j] > arr[j+1]) {
                //console.log(arr);
                console.log(`${arr}, swapping ${arr[j]}, and ${arr[j+1]}`);
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
} */

//optimized bubblesort
//if we have an array that's mostly sorted we want to stop sorting
//earlier in the process
//we'll use the noSwaps variable to keep track of this


function bubbleSort(arr) {

    let noSwaps = true;
    for(let i = arr.length-1; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j <= i - 1; j++) {
            //console.log(arr);
            if(arr[j] > arr[j+1]) {
                //console.log(arr);
                console.log(`${arr}, swapping ${arr[j]}, and ${arr[j+1]}`);
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break; //break out of the loop if we don't have any swaps;

    }
    return arr;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

console.log(bubbleSort([66, 2, 0, 7, 101, 88, 3]));



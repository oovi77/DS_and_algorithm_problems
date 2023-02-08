//insertion sort


/*
function insertionSort(arr) {

    console.log(`**: ${arr}`);
    for(let i = 1; i < arr.length; i++) {
        for(let j = i-1; j >= 0; j--) {
            //console.log(`${arr[i]} <= ${arr[j]} && ${arr[i]} >= ${arr[j-1]}`);
            if(arr[i] <= arr[j] && arr[i] >= arr[j-1]) {
                console.log(`inserting ${arr[i]} after ${arr[i-1]}`);

                //arr.splice()
                
                
                //let temp = arr[j];
                //arr[j] = arr[i];
                //arr[i] = temp;
                //console.log(arr); 
            }
        }
    }
    console.log('done');
    return arr;

}

//console.log(insertionSort([3, 44, 38, 5, 47, 15]));
let t1 = [3, 44, 38, 5, 47, 15];
t1.splice(1, 0, 38);
console.log(t1); */


/*
function insertionSort(arr) {

    let idx = 0;

    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log(`currentVal: ${currentVal}, j: ${arr[j]}`);
            arr[j+1] = arr[j];
            idx = j;
            console.log(arr, idx);
        }
        console.log(`idx: ${idx}, current val: ${currentVal}`);
        arr[idx] = currentVal;
        console.log(`changing idx ${arr[idx+1]}: ${arr}`);
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

*/

/*
[1, 2, 9, 76, 0]
[1, 2, 9, 76, 0]   currentVal = 0
[1, 2, 9, 76, 76]   76 > 0
[1, 2, 9, 9, 76]    9 > 0
[1, 2, 2, 9, 76]   2 > 0
[1  1, 2, 9, 76]   1 > 0
[0, 1, 2, 9, 76]
*/

/*
function insertionSort(arr) {

    let idx = 0;

    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
            console.log(arr);
            idx = j;
        }
        arr[idx] = currentVal;
        
        console.log(`final arr: ${arr}`);
    }

    return arr;

}*/
function insertionSort(arr) {

    let idx = 0;

    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        let j = i-1;
        for (; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
            console.log(arr);
            //idx = j;
        }
        //connsole.log(``)
        arr[j+1] = currentVal;
        
        console.log(`j: ${j+1}, cval: ${currentVal} final arr: ${arr}`);
    }

    return arr;

}

//console.log(insertionSort([1, 2, 9, 76, 0]));
console.log(insertionSort([2, 1, 9, 76, 4]));
/*
-1
1
2
1
*/
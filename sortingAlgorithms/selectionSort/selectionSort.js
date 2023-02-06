//Selection Sort

function selectionSort(arr) {
    if (arr.length <= 1) return arr;

    let min = 0;

    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) min = j;
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            console.log(`${arr}, swapped ${temp} and ${arr[i]}`);
        }
        
    }
    return arr;
}

console.log(selectionSort([7, 8, 22, -1, 55, 0, 2]));

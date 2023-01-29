/*
Write a recursive function called flatten which accepts an array of
arrays and returns a new array with all values flattened.

*/

//maybe come back and try this again,
/*
use a for loop to go over the current value if it is an array,
   if its an array do newArr = newArr.concat(flatten(oldArr[i]))

*/

function flatten(arr1){
    // add whatever parameters you deem necessary - good luck!
    let sum = []

    function recursive(val) {

        if(val.length === 0) {
            return;
        }

        console.log(`val is: ${val}`);

        if (Array.isArray(val[0])) {
            //return sum + val[0]
            sum.push(val[0][0]);
            //console.log(sum);
            recursive(val[0].slice(1));
        } else {
            sum.push(val[0]);
            //console.log(sum);
            recursive(val.slice(1));
        }
    }
    recursive(arr1);

    return sum;

}

  

/*
let t1 = [1, [2, 3, 4]];
let t2 = [];
t2.push(t1[0]);
t2.push(t1[1]);
console.log(t2);  */

let t3 = [1, [2, [3, 4], [[5]]]];
console.log(t3);
t3 = t3.slice(1);
console.log(t3);
t3 = t3.slice(1);
console.log(t3);

//console.log(t1[1].slice(1));
//console.log(Array.isArray(t1.slice(0)[0]));



//console.log(t1.slice(1)[0].slice(1));




//console.log(flatten([1, 2, 3, [4, 5] ]));// [1, 2, 3, 4, 5]
//console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
  //console.log(flatten([[1],[2],[3]])); // [1,2,3]
  //console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
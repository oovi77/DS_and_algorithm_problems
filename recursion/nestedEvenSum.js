/*
Write a function called nestedEvenSum. Returns the sum of 
all even numbers in an object which may contain nested objects

and CapitalizeWords is also down at the bottom of the page
*/

function nestedEvenSum(obj1) {

    let sum = 0;
    //console.log(`loooping`);
    for(let key in obj1) {
        //console.log(`key: ${key} and value: ${obj1[key]}`);
        if (typeof(obj1[key]) === 'number' && obj1[key] % 2 === 0) {
            sum = sum + obj1[key];
            //console.log(`adding: ${sum}`);
        } else if(typeof(obj1[key]) === 'object' && key !== null) {
            sum = sum + nestedEvenSum(obj1[key]);
        }

       
    }
    //console.log(`sum is: ${sum}` );

    return sum;


}

//console.log(typeof(1));

/*
var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10

  */

  //capitalize words

  /*
    Write a recursive function called capitalizeWords. Given an array
    of words, return a new array containing each word capitalized.    

  */

function capitalizedWords (arr1) {
    let caps = [];

    function capital(arr2) {
        if (arr2.length < 1) return;
        caps.push(arr2[0].toUpperCase());
        capital(arr2.slice(1));
    }
    capital(arr1);

    return caps;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
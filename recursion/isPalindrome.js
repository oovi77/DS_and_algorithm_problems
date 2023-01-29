/*
Write a recursive function called isPalindrome which returns true if the 
string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.

*/

/*
function isPalindrome(str){

    let reversedString = reverse(str.toLowerCase());
    if (str === reversedString) {
        return true;
    } else {
        return false;
    }
    
}

function reverse(str) {
    let revStr = "";

    function rev(str1) {
        if(str1.length === 0) {
            return;
        }
        revStr = revStr + str1.pop();
        //console.log(`rev str is: ${revStr}`);
        rev(str1);
    }

    rev(Array.from(str));
    return revStr;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false


*/


/*
Write a recursive function called someRecursive which accepts an array
and a callback. The function returns true if a single value in the array
returns true when passed to the callback. Otherwise it returns false.


*/

function someRecursive(array, afunc1) {

    

    if(array.length === 0) return false;

    if(afunc1(array[0]) === true) {
        return true;
    } else {
        return someRecursive(array.slice(1), afunc1);
    }
    
}

const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd)); //true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

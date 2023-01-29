/*
Write a recursive function called reverse which accepts a string
and returns a new string in reverse.

*/

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

/*
let t1 = Array.from("string");
console.log(t1.slice(1));
console.log(t1.pop())
console.log(t1); */


console.log(reverse('awesome'));
console.log(reverse('rithmschool'));

/*
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter 
of each string in the array.
*/

function capitalizeFirst(sentence) {

    let caps = [];

    function capital(arr) {
        if(arr.length < 1) return;

        caps.push(capitalWord(arr[0]));
        capital(arr.slice(1));
    }

    capital(sentence);


    function capitalWord(val) {
        let letter = Array.from(val)[0].toUpperCase();
        return letter.concat(val.slice(1));
    }


    return caps;


    
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
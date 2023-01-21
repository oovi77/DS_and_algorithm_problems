/*
Given two strings, write a function to determine if the second string is
an anagram of the first. An anagram is a word, phrase, or name, formed by
rearranging the letters of another, such as cinema, formed from iceman.

*/

/*
function validAnagram(str1, str2) {
    //create two objects, count occurrences of each letter for each array
    //loop over each array to count the occurrences of each letter and store in objects
    //compare the two objects to see if the number of letters match
    //if they do then return true, else false and it is not an anagram

    if(str1.length !== str2.length) {
        return false;
    }

    const obj1 = {};
    const obj2 = {};

    for (let i in str1) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    }

    //could remove this second loop, and instead in the third loop
    //when we compare obj1 to str2 we would remove letters as we find them
    //see the second solution down below which uses 2 loops instead of 3
    for (let j in str2) {
        obj2[str2[j]] = (obj2[str2[j]] || 0) + 1;
    }
    
    //console.log(obj1);
    //console.log(obj2);

    for (let key in obj1) {

        if(!(key in obj2)) {
            return false;
        }

        if(obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;

}
*/
//console.log(validAnagram('anagram', 'nagaram'));


console.log(validAnagram('', ''));   //t
console.log(validAnagram('aaz', 'zza')); //f
console.log(validAnagram('anagram', 'nagaram')); //t
console.log(validAnagram('rat', 'car')); //f
console.log(validAnagram('awesome', 'awesom')); //f
console.log(validAnagram('qwerty', 'qeywrt'));  //t
console.log(validAnagram('texttwisttime', 'timetwisttext')); //t

//better solution with 2 loops instead of 3

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  //validAnagram('anagrams', 'nagaramm')

  console.log(validAnagram('', ''));   //t
  console.log(validAnagram('aaz', 'zza')); //f
  console.log(validAnagram('anagram', 'nagaram')); //t
  console.log(validAnagram('rat', 'car')); //f
  console.log(validAnagram('awesome', 'awesom')); //f
  console.log(validAnagram('qwerty', 'qeywrt'));  //t
  console.log(validAnagram('texttwisttime', 'timetwisttext')); //t

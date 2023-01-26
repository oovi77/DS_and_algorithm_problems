/*


Write a function called findLongestSubstring, which accepts a string
and returns the length of the longest substring
with all distinct characters.

    findLongestSubstring('') // 0
    findLongestSubstring('rithmschool') // 7
    findLongestSubstring('thisisawesome') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
    findLongestSubstring('longestsubstring') // 8
    findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)


*/

/*
function findLongestSubstring(str) {
    if(str.length === 0) return 0;

    let start = 0;
    let end = 1;

    while(end < str.length) {


    }


} */



function findLongestSubstring(str) {

    if(str.length === 0) return 0;

    let max = {};
    let length = -1;
    let temp = 0;
    let start = 0;


    for (let pos = 0; pos < str.length; pos++) {

        let letter = str[pos];

        //console.log(`letter is: ${letter}`);
        
        if(!(letter in max)) {
            max[letter] = pos;
            //console.log(max);
            temp = pos - start + 1;
            if (temp > length) {
                length = temp;
                //console.log(`${pos} - ${start} = ${length}`);
                
            }
           
            
        } else {
            //temp = 0;
            //max = {};
            //console.log(max);
            //console.log(`repeat on ${letter}`);
            start = max[letter];
            max[letter] = pos;

            console.log(`deleting ${letter}, start at: ${start}`);
            
        }
        
    }
    

    return length;

} 


/*
console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
*/

//console.log(findLongestSubstring('thisisawesome')); //6
//console.log(findLongestSubstring('rithmschool')) //7

console.log(findLongestSubstring('thecatinthehat'))

/*
t
t h
t h i
t h i s
t h i s i -  is already in string, start at 2 tempSize = 4, 

s i
s i s - is already in string, start at 3 tempSize not greater than 4;
i s a
i s a w
i s a w e
i s a w e s - repeat, start at 5 tempSize = 5;
a w e s o
a w e s o m
a w e s o m e - repeat, tempSize = 6;

[t h i s i s a w e s  o  m  e]
[0,1,2,3,4,5,6,7,8,9,10,11,12]

[this] - start = 0 to 4
[thisi]
[si]


*/

/*
function findLongestSubstring(str) {

    if(str.length === 0) return 0;

    let max = {};
    let length = -1;
    let temp = 0;
    let start = 0;


    for (let pos = 0; pos < str.length; pos++) {

        let letter = str[pos];

        //console.log(`letter is: ${letter}`);
        if(!(letter in max)) {
            max[letter] = pos;
            //console.log(max);
           
            temp = pos - start + 1;
            if (temp > length) {
                length = temp;
                //console.log(`${pos} - ${start} = ${length}`);
                //console.log(`word is start: ${start} to end: ${pos}`);
            }
            
        } else {
            //temp = 0;
            //max = {};
            //console.log(max);
            //console.log(`repeat on ${letter}`);
            
            start = max[letter];
            max[letter] = pos;

            temp = pos - start;
            if (temp > length) {
                length = temp;
                console.log(`${pos} - ${start} = ${length}`);
            }
            //console.log(`deleting ${letter}, start at: ${start}`);
            
        }
    }

    return length;

} */

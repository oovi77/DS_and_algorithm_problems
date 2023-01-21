/*
Write a function called sameFrequency. Given two positive integers, find out
if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false

*/

function sameFrequency(n1, n2) {
    let freq = {};
    //let freq2 = {};

    n1 = n1.toString();
    n2 = n2.toString();
    if (n1.length !== n2.length) return false;

    for (let x in n1) {
        if(n1[x] in freq) {
            freq[n1[x]]++;
        } else {
            freq[n1[x]] = 1;
        }
    }

    for (let x in n2) {
        if(!freq[n2[x]]) {
            return false;
        } else {
            freq[n2[x]]--;
        }
    }

    /*
    for (let x in n2) {
        if(n2[x] in freq2) {
            freq2[n2[x]]++;
        } else {
            freq2[n2[x]] = 1;
        }
    }

    for (let q in freq) {
        if(q in freq2 !== true) {
            return false;
        } else if (freq[q] !== freq2[q]) {
            return false;
        }
    } 
    */
   

    

    return true;

    //console.log(freq);

}

console.log(sameFrequency(188182, 281)); //false
console.log(sameFrequency(34, 14)); //f
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //f
console.log(sameFrequency(222, 222)); //t
console.log(sameFrequency(2222, 222)); //f


/*
Write a function called averagePair. Given a sorted array of integers
and a target average, determine if there is a pair of values in the
array where the average of the pair equals the target average. There
may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

    averagePair([1,2,3],2.5) // true
    averagePair([1,3,3,5,6,7,10,12,19],8) // true
    averagePair([-1,0,3,4,5,6], 4.1) // false
    averagePair([],4) // false

*/

function averagePair(arr, avg) {
    if(arr.length === 0) return false;

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end] / 2;
        //console.log(`start: ${arr[start]}, end: ${arr[end]} = sum: ${sum}`);
        if(sum > avg) {
            end--;
        } else if (sum < avg) {
            start++;
        } else if (sum === avg) {
            return true;
        }

    }

    return false;
    
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false

/*
([1,3,3,5,6,7,10,12,19],8)

1 + 19 = 20, 20 / 2 = 10
since 10 > 8, move end pointer down to 12 --
1 + 12 = 13, 13 / 2 = 6.5, since 6.5 is < 8, move start pointer to the right ++
3 + 12 = 15, 15 / 2 = 7.5 since 7.5 is < 8, move start ++;
same
5 + 12 = 17 / 2 = 8.5 since 8.5 > 8 move end pointer to left --;
5 + 10 = 15 / 2 = 7.5 since 7.5 < 8 move start to right ++;
6 + 10 = 16 / 2 = 8 done

*/
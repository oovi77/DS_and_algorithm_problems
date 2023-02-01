/*

Write a function called stringifyNumbers which takes in an object
and finds all of the values which are numbers and converts them to
strings. Recursion would be a great way to solve this!


*/

//wants a new object to not modify the original object

function stringifyNumbers(mainObj) {

    let tempObj = JSON.parse(JSON.stringify(mainObj));

    function stringifyNumbers2(obj1) {

        for (let key in obj1) {

            if(typeof(obj1[key]) === 'number') {
                obj1[key] = obj1[key].toString();
            }

            if(typeof(obj1[key]) === 'object' && obj1[key] !== null) {
                stringifyNumbers2(obj1[key])
            }

        }

        return obj1;

    }

    tempObj = stringifyNumbers2(tempObj);
    return tempObj;
}


/*
function stringifyNumbers(obj2) {

    let obj3 = {}

    function strNum(obj1) {
    for (let key in obj1) {

        if(typeof(obj1[key]) === 'number') {
            obj3[key] = obj1[key].toString();
        } else if(typeof(obj1[key]) === 'object' && obj1[key] !== null) {
            obj3[key] = obj1[key];
            strNum(obj3[key]);
        } else {
            obj3[key] = obj1[key];
        }

    }

    
    }

    strNum(obj2);
    console.log(`obj3 is: ${obj3}`);
    return obj3;
} */


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(obj);
console.log(stringifyNumbers(obj));
console.log(obj);
//console.log(obj);
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
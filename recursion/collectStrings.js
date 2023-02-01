
/*
Write a function called collectStrings which accepts an object
and returns an array of all the values in the object that have
a typeof string

*/

function collectStrings(obj1) {

    let arrStrings = [];

    function recurseString(obj2) {
        for(let key in obj2) {
            if(typeof(obj2[key]) === 'string') {
                arrStrings.push(obj2[key]);
            }

            if(typeof(obj2[key]) === 'object' && obj2[key] !== null) {
                return recurseString(obj2[key]);
            }

        }
    }
    recurseString(obj1);

    return arrStrings;

}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
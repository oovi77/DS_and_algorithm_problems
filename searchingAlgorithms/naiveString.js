

/*
function naiveString(str, val) {

    let checker = 0;
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        checker = 0;
        //console.log(`i is: ${str[i]}`);
        for (let j = 0; j < val.length; j++) {
            let q = i + j;
            //console.log(`val[j]: ${val[j]}, q: ${q} str[q]: ${str[q]}`);
           
            if(val[j] === str[q]) {
                checker++;
                //console.log(`val[j]: ${val[j]}, str[q]: ${str[q]}`);
                if(checker === val.length) count++;
            }
        }
    }

    return count;
} */



//a better looking solution

function naiveString(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if(short[j] !== long[i+j]) {
                break;
            }
            if(j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

console.log(naiveString('wowomgzomg omfg mofg', 'omg')); //2
console.log(naiveString('wowomgzomg omfg mofg', 'o')); //5
console.log(naiveString(`lori loled`, 'lol')); //1


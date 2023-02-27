
//first varation of hash function
//this only works on strings


class HashTable {
    constructor(size=53) { //default size if we dont specify anything is 53
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let hash_key = this._hash(key); //this could be called index
        console.log(hash_key);
        //if(hash_key >= this.keyMap.length) return undefined; //not needed


        //if its not in the array, make an array at the hask_key index
        //then push the key value pair into the array
        if(!this.keyMap[hash_key]) this.keyMap[hash_key] = [];
        this.keyMap[hash_key].push([key, value]);
        
        /*
        if(this.keyMap[hash_key]) {
            this.keyMap[hash_key].push(key);
            this.keyMap[hash_key].push(value);
        } else {
            this.keyMap[hash_key] = [];
            this.keyMap[hash_key].push(key);
            this.keyMap[hash_key].push(value);
        } */
    }

    get(key) {
        let hash_key = this._hash(key);
        if(this.keyMap[hash_key]){
            for(let i = 0; i < this.keyMap[hash_key].length; i++) {
                if(this.keyMap[hash_key][i][0] === key ) {
                    return this.keyMap[hash_key][i][1]; //only want to return the
                    //value of the key-value pair
                }
            }
        } else {
            return undefined;
        }
    }

    //values and keys only return unique values

    keys() {
        let keys = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    }

    values() {
        let values = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!values.includes(this.keyMap[i][j][1])) { //no duplicates
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return values;
    }


}

let t1 = new HashTable();
t1.set("pizza", 2290);
t1.set("mon", 22);
t1.set("fangs",  34);
t1.set("a",  35);
t1.set("b",  36);
t1.set("c",  37);
t1.set("d",  38);
t1.set("e",  39);
t1.set("f",  39);
t1.set("g",  39);

console.log(t1);
console.log(t1.get("c"))
console.log(t1.get("d"))
console.log(t1.get("a"))
console.log(t1.get("fangs"))
console.log(t1.get("gfg"))
console.log(t1.keys());
console.log(t1.values());



/*
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        //map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
} */

/*


function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31; //hashes use prime numbers
    //in general to reduce collisions

    //added a min in the for loop so we don't go over 100 
    //regardless of the length of the key string
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total + WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(hash("pink", 100)); //74

*/


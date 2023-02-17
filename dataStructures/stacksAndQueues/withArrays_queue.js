//Queues with arrays


let q = [];

q.push(1);
q.push(2);
q.push(3);

console.log(q);
//need to remove from the start, so we can use shift
console.log(q.shift());
console.log(q.shift());
console.log(q.shift());
console.log(`q is: ${q}`);


//could also do it this way instead:
//add from the front with unshift 
q.unshift(1)   //[1]
q.unshift(2)   //[2 , 1]
q.unshift(3)  //[3, 2, 1]
console.log(q);
q.pop(); 
console.log(q); //[2, 1]

//so we have two ways of implementing queues (first in first out)
/*
can use push and shift
or unshift and pop

*/
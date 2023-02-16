/*
let stack = [];

stack.push("google");
stack.push('instagram');
stack.push('youtube');

console.log(stack);
stack.pop(); */

//as long as you ONLY use the array above as a stack
//with pop and push (removing and adding from top
//as a LIFO data structure), it is considered a stack
//if you start adding and removing items from the beginning
//or middle then it stops being a stack


//using unshift to add to beginning of array
//using shift to remove from beginning of array
//this example also works, because we are adhearing to the main
//principle of a stack - LIFO, last in first out,
//only in this example we are doing it at the start of the array instead


let stack = [];
stack.unshift('create new file');
stack.unshift('resized file');
stack.unshift('cloned out wrinkle in photoshop');
console.log(stack);
stack.shift() //removes from beginning
console.log(stack); 



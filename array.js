// console.log("hello");

let a = [10,20,30,40];

// for(let i in a)    /// prints index 
// {
//     console.log(i);
// }
// let avg = 0;
// for(let i of a)   // prints value
// {
//     avg = avg+i;
// }
// console.log(avg);
// avg = avg/a.length;

// console.log(avg);


//                                        Q. apply 10% off on array a
//                                        Ans ↓

// for(let i in a)
// {
//     let off = a[i]*(10/100);
//     off = a[i] - off;

//     a[i] = off;

// }

// console.log(a);

//                                              PUSH,POP,UNSHIFT,SHIFT

// ADD an element using PUSH

// a.push(12);  // add at end
// a.unshift(21); // add at start
// console.log(a);

// let b = a.pop();   //  return deleted value
// let c = a.shift(); // return deleted value  
//a.pop()  // delete at end and give the array
//a.shift() // delete at start and give the array
// console.log(b);
// console.log(c);
// console.log(a);

//                                                    CONSCAT

// let b = ["10","20","30"]

// let c =  a.concat(b);   // Add two Arrays

// let d = ["ten",10]

// c = a.concat(b,d);  // add more than two arrays also


// console.log(c)

//                                                          SLICE 

// let s = a.slice(0,2)  // return the peace  of the array (start index , end index) ,, end index - 1 will be returned
// console.log(a)
// console.log(s)

// s = a.slice(2)  // index 2 to end of the array
// console.log(s)   

// s = a.slice() // no slice everything in array will be returned
// console.log(s)


//                                                                 SPLICE



// a = [10,30,40,50]
// console.log(a)

// let c = a.splice(1,2, 101,102)  // return deleted values
// console.log(c)
// a.splice(1,2, 101,102)   // (1,2,101,102) --> 1 :- start index , 2 :- how many to delete from start index , (101,102) :-  add this two after deleting 
// console.log(a)

// let  k = [10,20,50,60]
// console.log(k)
// k.splice(1,0,30,40)  // no delete will occur  here only adding and remove 1st index value
// console.log(k)
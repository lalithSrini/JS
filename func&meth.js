// console.log("hello")


// function name()
// {
//     let a = prompt("Enter your name");
//     console.log(a);
//     console.log("my name is ",a);
// }

// name();


// // Function declaration
// function greet(name) {
//     // return `Hello, ${name}!`;    // templet literals

//     // OR 

//     return "hello, "+name;
// }

// // Calling the function
// console.log(greet("Lalith Srinivas")); // Output: Hello, Alice!


// function mult(m,n)
// {
//     console.log(m*n);
// }

// mult("9","7");
// mult(8,9);
// mult("8",8);

// mult("seven",7)  // error (Not a Number (NaN))

// SUM

// function sum(a,b)
// {
//     let sum = a + b;
//     return sum;
//     // console.log(sum);
// }

// //sum(7,8)
// console.log(`sum : ${sum(5,6)} `)


//                                                      Arrow function with implicit return
const multiply = (a, b) => a * b;

console.log(`${multiply(4, 2)}`); // Output: 8





//                                                    Arrow function with explicit return
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 4)); // Output: 6

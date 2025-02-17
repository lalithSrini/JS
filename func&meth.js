// // console.log("hello")


// // function name()
// // {
// //     let a = prompt("Enter your name");
// //     console.log(a);
// //     console.log("my name is ",a);
// // }

// // name();


// // // Function declaration
// // function greet(name) {
// //     // return `Hello, ${name}!`;    // templet literals

// //     // OR 

// //     return "hello, "+name;
// // }

// // // Calling the function
// // console.log(greet("Lalith Srinivas")); // Output: Hello, Alice!


// // function mult(m,n)
// // {
// //     console.log(m*n);
// // }

// // mult("9","7");
// // mult(8,9);
// // mult("8",8);

// // mult("seven",7)  // error (Not a Number (NaN))

// // SUM

// // function sum(a,b)
// // {
// //     let sum = a + b;
// //     return sum;
// //     // console.log(sum);
// // }

// // //sum(7,8)
// // console.log(`sum : ${sum(5,6)} `)


// //                                                      Arrow function with implicit return
// // const multiply = (a, b) => a * b;

// // console.log(`${multiply(4, 2)}`); // Output: 8





// // //                                                    Arrow function with explicit return
// // const subtract = (a, b) => {
// //     return a - b;
// // };

// // console.log(subtract(10, 4)); // Output: 6


// // const hello = () => console.log("hello TLS");

// // hello();

// //                                           no of vowels in a String



// // Function to print the length of a string
// // function printStringLength(str) {
   
// //     const v = "aeiou"
    
// //     let c = 0
// //     console.log(str);

// //     for(let i of str)
// //     {
// //         console.log(i);
// //         if(v.includes(i))
// //         {
// //             c = c + 1;
// //         }
// //     }
// //     console.log(str+"="+c);
// // }

// // // Calling the function

// // let s = prompt("enter")
// // printStringLength(s); // Output: Length of the string: 18

// //                                         Arrow function 


// // const nov = (str)=> 
// // {

    
// //     const v = "aeiou"
    
// //     let c = 0
// //     console.log(str);

// //     for(let i of str)
// //     {
       
// //         if(v.includes(i))
// //         {
// //             c = c + 1;
// //         }
// //     }
// //     console.log(str+"="+c);

// // }

// // nov("TLS is Here")



// // let a = "AnD"
// // a = a.toLowerCase();
// // console.log(a)



// // let a = ["tls","TLS"]

// // a.forEach(function str(val,idx, a) {
// // //    console.log(val,idx);
// //    console.log(val.toLowerCase(),idx,a) 
// // });

// //                               user array input

// // Prompt the user to enter values separated by commas
// let user = prompt("Enter numbers separated by commas:");

// // Convert the input string into an array using split()
// let array = user.split(",");

// // Trim spaces and convert elements to numbers (if needed)
// array =  array.map((val)=> val.trim())

// // Print each value in the array using map method
// array.map((val)=> console.log(val))

// // Print the array
// console.log("User-entered array:", array);


// // array.forEach(function sq(val)
// // {
// //     console.log(val**2);
// // })

// // OR

// // let sq = (n) => 
// //     {
// //         console.log(n*n);
// //     } 

// // array.forEach(sq)
 



// let a = [1,2,3,4,5,6]

// let b = a.map((val)=> { return val%2 == 0})  // gives boolean value

// let c = a.filter((val)=> {return val%2 == 0})  // gives only true value as new Array 

// console.log(b)
// console.log(c)

// //                                           Sum of Array
// let sum = a.reduce((prev,curr)=>  // 1st prev == 1, and curr == 2
// {
//     // return prev = prev +  curr;
//     // OR
//     return prev+curr;
// })

// console.log(sum)


//                                largest of Array



// let large = a.reduce((prev,curr)=>
// {
//     // return prev > curr ? prev : curr;

//     return prev = prev > curr ? prev : curr;
// })


// let smal = a.reduce((prev,curr)=>
//     {
//         // return prev > curr ? prev : curr;
    
//         return prev = prev < curr ? prev : curr;
//     })
    

// console.log(large)
// console.log(smal)





//                     Q. Given Array with marks of the students , give me the Array with only the students marks with above 90


//  ans

// let a = [10,100,120,90,94,154,20]


// let a_ = a.filter((val)=>
// {
//     return val > 90; 
// })

// console.log(a_)


// console.log("HEllo");
// // alert("ChecK in Inspect For outPut");

// name = "TLS is my name";

// console.log(name);
// fine = 5;
// console.log(fine);
// x= "done i can't Understand";
// console.log(x);

// console.warn("ok this is warning Statement");
// console.error("Error statement ,how it is");
// console.info("hello")


// TO USE VARIABLES WE HAVE TO USE (let,const or var)
// const pi = 3.14;

// let Name = "Lalith Srinivas";

// console.log(Name);
// console.log(pi);

// console.log(typeof(Name));
// console.log(typeof(pi));
// document.write("Hello, World!");


// let student = 
// {
//     name: "lalith Srinivas",
//     age: 19,
//     cgpa:8.5,
//     ispass:true,
// };

// console.log(student);
// console.log(student.age);
// console.log(student["cgpa"]);


// const student = 
// {
//     name: "lalith Srinivas",
//     age: 19,
//     cgpa:8.5,
//     ispass:true,
// };

// console.log(student);
// console.log(student.age);
// console.log(student["name","age","cgpa","ispass"]);  // only last one is visible("ispass")
// student["ispass"] = false;
// document.write(student["name","age","cgpa","ispass"]); // only last one is visible("ispass")
// let ispass = true;
// console.log(ispass);
// console.log(student["ispass"]);

// console.log(typeof(student.ispass))

// let a = 5;
// // console.log("a = ",--a);  //ans :  4   //(pre decrement)

// console.log("a--: ",a--); //ans: 5  //post  decrement
// console.log(a); //ans : 4

// let a = 5;
// let b = "5";

// console.log(a==b); // change datatype and check the value(ans : true)

// console.log(a===b);  // check the datatype (ans : false)


//  if else loop in one line

// let a = 100<20 ? "hello" : "world";

// console.log(a);

// let b = prompt("enter");

// console.log(b);

// let c = prompt("enter a String: ")
// console.log(c);

// console.log("b :",b,typeof(b));
// console.log("c : ",c,typeof(c));


let a = prompt("eter a number ");

if (a%5 == 0)
{
    console.log("multipe");
}
else
{
    console.log("not  a number/ not a multiple")
}
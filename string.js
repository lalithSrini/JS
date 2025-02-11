console.log("Hello");
let x = "     lalith srinivas   "
let b = `hi check the sentence ${x} bellow`;  // <--- it is known as templet literals
let a = "HEllo the above one is printed using this:(` `)  ";
// console.log(b);
// console.log(a.toLowerCase());
// let sd = a.toUpperCase();
// console.log(x);
// console.log(x.trim());   // trim the whitespace only starting and ending
// console.log(sd);


x = x.trim();  //--> lalith srinivas

console.log(x.slice(2,5)) // starting and ending position

console.log(x.slice(2))  // ending is optional
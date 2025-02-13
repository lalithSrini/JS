console.log("Hello");
let x = "lalith srinivas   "
let b = `hi check the sentence ${x} bellow`;  // <--- it is known as templet literals
let a = "HEllo the above one is printed using this:(` `)  ";
// console.log(b);
// console.log(a.toLowerCase());
// let sd = a.toUpperCase();
// console.log(x);
// console.log(x.trim());   // trim the whitespace only starting and ending
// console.log(sd);


// x = x.trim();  //--> lalith srinivas

// console.log(x.slice(2,5)) // starting and ending position

// console.log(x.slice(2))  // ending is optional


// console.log(x.concat(b));  // adding to strings

x[0] = "w"; //--> not work beacuse String is immutable  so, we use replace , check next line 
console.log(x) ;
x = x.replace("l","w");  // starting of the alphabet will be replaces (l is available 2 times first l will be changed)
console.log(x);

// let c = x.replace("l","w", "l","c"); // only one time can be used "l","w" --> work  , "l","c" --> not work
 
// console.log(c)


// let z = x.replaceAll("l","w"); // replace all the available l's in the string

// console.log(z);



// reference = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 


// ← ↑ → ↓
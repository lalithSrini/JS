let body = document.querySelector("body");
let mode = document.querySelector("button");

let curr = "light";

body.classList.add("light");

mode.addEventListener("click", () => {
    if (curr === "light") {
        body.classList.remove("light"); 
        body.classList.add("dark"); 
        curr = "dark"; 
        console.log("dark");
    } else {
        body.classList.remove("dark"); 
        body.classList.add("light");
        curr = "light"; 
        console.log("light");
    }
});

// Access Id's

// let a = document.getElementById("ah1");
// let b = document.getElementById("ah2")

// console.log(a)
// console.dir(a)
// console.log(b)
// console.dir(b)


// // Access classes


// let c = document.getElementsByClassName("c1")

// console.log(c)
// console.dir(c)


// let d = document.getElementsByTagName("p")


// console.log(d)

// console.log(document.getElementsByTagName("h1"))

// console.log(document.querySelector("p"))
// console.log(document.querySelector("h1"))
// console.log(document.querySelectorAll("h1"))


// let c = document.getElementById("ah2")

// c.innerText = "TLS"
// c.innerHTML = "<i>Lalith Srinivas</i>"


// let d = document.querySelector("div");

// console.log(d)

// let c = d.getAttribute("id")
// console.log(d.setAttribute("id","lal"))


let d = document.querySelector("div");
let b = document.querySelector("body");
let l = document.querySelector("ul")

d.style.height = "300px";

d.style.width = "100px";

d.style.color = "green"

d.style.backgroundColor = "orange"


let bu = document.createElement("button")
bu.innerText="Srinivas"
console.log(bu)


d.append(bu)


let he = document.createElement("h4")
he.innerText="Lalith"

b.prepend(he)


let but0 = document.createElement("option")
but0.innerText="Thotam"

d.before(but0)



let but1 = document.createElement("button")
but1.innerText="TLS"
l.after(but1)


// let h = document.querySelector("h1")

// h.remove()
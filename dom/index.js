/*
//Innertext pays attention to sttlying whereas text content does not pay 
// attention to styling. textContent just gives all the text present inside
// the selected element irrespective of styling.

var header = document.getElementById("main-header")
header.style.border = "solid 3px #000"

var addItems = document.getElementsByClassName("title")[0]

addItems.style.fontWeight = "bold";
addItems.style.color = "green"

var listItems = document.getElementsByClassName("list-group-item")

//listItems[2].style.backgroundColor = "green"

for(var i = 0; i<listItems.length;i++){
    listItems[i].style.fontWeight = "bold"
}

document.getElementsByClassName("list-group").items.children[4].textContent = "red"
document.getElementsByTagName("li")[4].style.color = "red"

//var item2 = document.querySelector("#items").children[1]
//item2.style.backgroundColor = "green"

//var item3 = document.querySelector("#items").children[2]
//item3.style.visibility = "hidden"

//var item2 = document.querySelectorAll(".list-group-item")[1]
//item2.style.backgroundColor = "green"

var listItems = document.querySelectorAll(".list-group-item")

for(var i=0; i<listItems.length;i++){
    if(i%2!=0){
        listItems[i].style.backgroundColor = "green"
    }
}

// querySelector selects only first element matching to the query passsed inside it.
// whereas querySelectorAll gives a list of all the matching elements

*/

// Traversing The DOM 

// Using parentNode property
 var items = document.querySelector("#items")
// items.parentNode.style.backgroundColor = "rgb(205, 208, 208)"
// console.log(items.parentNode.parentNode)

// var items = document.querySelector("#items")
// items.parentElement.style.backgroundColor = "rgb(205, 208, 208)"
// console.log(items.parentElement.parentElement)

// Using .childNode property
//console.log(items.childNodes) // childNodes also gives <br> as childs

// .children
console.log(items.children)
items.children[1].style.backgroundColor = "yellow"

// .firstChild : considers <br> as childs
console.log(items.firstChild)

// .firstElementChild
console.log(items.firstElementChild)
items.firstElementChild.textContent = "Hello1"

// .lastChild : considers <br> as children
console.log(items.lastChild)

// .lastElementChild
console.log(items.lastElementChild)
items.lastElementChild.textContent = "Hello5"

// .nextSibling
console.log(items.nextSibling)

// .nextElementSibling
console.log(items.nextElementSibling)

// .previousSibling
console.log(items.previousSibling)

// .previosElementSibling
console.log(items.previousElementSibling)
items.previousElementSibling.style.color = "green"

// createElement

// create a div
var newdiv = document.createElement("div")
// Add id 
newdiv.id = "hello1"
// Add class
newdiv.className = "hello"
// Add attr
newdiv.setAttribute("title", "Hello div")

// Adding some text inside div
// creating text node
 var newDivText = document.createTextNode("Hello World")

// Adding this text node to div
newdiv.appendChild(newDivText)

// Adding this div to dom

var container = document.querySelector("header .container")
var h1 = document.querySelector("header h1")

container.insertBefore(newdiv, h1)

var ul = document.querySelector("#items")
var item1 = document.querySelector("#items").firstElementChild

ul.insertBefore(newdiv,item1)
console.log(newdiv)

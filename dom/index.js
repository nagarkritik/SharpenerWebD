
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
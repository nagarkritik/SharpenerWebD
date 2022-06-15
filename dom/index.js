
//Innertext pays attention to sttlying whereas text content does not pay 
// attention to styling. textContent just gives all the text present inside
// the selected element irrespective of styling.

var header = document.getElementById("main-header")
header.style.border = "solid 3px #000"

var addItems = document.getElementsByClassName("title")[0]

addItems.style.fontWeight = "bold"
addItems.style.color = "green"

var listItems = document.getElementsByClassName("list-group-item")

listItems[2].style.backgroundColor = "green"

for(var i = 0; i<listItems.length;i++){
    listItems[i].style.fontWeight = "bold"
}

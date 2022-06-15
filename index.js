var listItems = document.getElementsByClassName("list-group-item")

listItems[2].style.backgroundColor = "green"

for(var i = 0; i<listItems.length;i++){
    listItems[i].style.fontWeight = "bold"
}

class Exp{
    static c
    constructor(expense, description, category){
        Exp.c += 1
        this.expense = expense
        this.description = description
        this.category = category
        this.number = Exp.c
        
    }
}

let form = document.querySelector(".form")
let newDiv = document.querySelector(".info-container")
let infoList = document.querySelector(".info-list")

form.addEventListener("submit", addItem)
window.addEventListener("load", displayExpense)
newDiv.addEventListener("click", deleteUser)


function addItem(e){
    e.preventDefault()
    //console.log(e)

    
    let expense =  document.querySelector("#expense").value
    let description = document.querySelector("#description").value
    let category = document.querySelector("#category").value

    exp1 = new Exp(expense, description, category)
    localStorage.setItem("number", Exp.c)
    exp1_serialized = JSON.stringify(exp1)

    localStorage.setItem(exp1.number,exp1_serialized)


}

function displayExpense(){
    
    if(localStorage.getItem("number") != null){
        Exp.c = parseInt(localStorage.getItem("number"))
    }else{
        Exp.c = 0
    }

    for(let i=0; i<localStorage.length;i++){

        if(localStorage.key(i) == "number"){
            //console.log("number")
            continue
        }

        let exp = JSON.parse(localStorage.getItem(localStorage.key(i)))
        //console.log(exp)
        
        let list = document.querySelector(".info-list")

        let details = document.createElement("li")
        let delBtn = document.createElement("button")
        let editBtn = document.createElement("button")

        details.id = exp.number
        delBtn.className = "delBtn delete"
        editBtn.className = "editBtn edit"

        delBtn.appendChild(document.createTextNode("X"))
        editBtn.appendChild(document.createTextNode("Edit"))

        details.appendChild(document.createTextNode(`${exp.expense} - ${exp.description} - ${exp.category}       `))
        details.appendChild(delBtn)
        details.appendChild(editBtn)
        list.appendChild(details)
        //console.log(details)
        
    }

}

function deleteUser(e){
    
    if(e.target.classList.contains("delete")){
        //console.log(e)
        let item = e.target.parentElement
        //console.log(item.id)
        infoList.removeChild(item)

        for(let i=0; i<localStorage.length; i++){
            if(item.id === localStorage.key(i)){
                localStorage.removeItem(localStorage.key(i))
            }
        }
    }

    if(e.target.classList.contains("edit")){
        
        let editElementId = parseInt(e.target.parentElement.id)
        console.log(typeof(editElementId))
        let newExpense = prompt("Enter new Expense: ")
        let newDescription = prompt("Enter new description: ")
        let newCategory = prompt("Enter new category: ")

        editObj = new Exp(newExpense, newDescription, newCategory)
        Exp.c -= 1
        editObj.number = editElementId

        editObjSerial = JSON.stringify(editObj)

        localStorage.setItem(editElementId, editObjSerial)


    }
}



class Exp{
    static c = 0
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
    }

    for(let i=1; i<localStorage.length+1;i++){

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
}


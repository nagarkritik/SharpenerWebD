
class Exp{
    //static c
    constructor(expense, description, category){
        //Exp.c += 1
        this.expense = expense
        this.description = description
        this.category = category
        //this.number = Exp.c
        
    }
}
let url = `https://crudcrud.com/api/765b1195af8a4d64b5fd0784d3688936/expenseData`
let form = document.querySelector(".form")
let newDiv = document.querySelector(".info-container")
let infoList = document.querySelector(".info-list")

form.addEventListener("submit", addItem)
window.addEventListener("load", getUersFromBackend)
newDiv.addEventListener("click", deleteUser)


function addItem(e){
    e.preventDefault()
    //console.log(e)

    
    let expense =  document.querySelector("#expense").value
    let description = document.querySelector("#description").value
    let category = document.querySelector("#category").value

    let exp1 = new Exp(expense, description, category)
    // localStorage.setItem("number", Exp.c)
    // exp1_serialized = JSON.stringify(exp1)

    // localStorage.setItem(exp1.number,exp1_serialized)

    axios.post(url, exp1)
    .then((res)=>{
        console.log(res)
        displayExpense([res.data])
    })
    .catch((err)=>console.log(err))

}

function displayExpense(users){
    
    for(let i=0; i<users.length;i++){

        // if(localStorage.key(i) == "number"){
        //     //console.log("number")
        //     continue
        // }

        // let exp = JSON.parse(localStorage.getItem(localStorage.key(i)))
        // //console.log(exp)
        
        let list = document.querySelector(".info-list")

        let details = document.createElement("li")
        let delBtn = document.createElement("button")
        let editBtn = document.createElement("button")

        details.id = users[i]._id
        delBtn.className = "delBtn delete"
        editBtn.className = "editBtn edit"

        delBtn.appendChild(document.createTextNode("X"))
        editBtn.appendChild(document.createTextNode("Edit"))

        details.appendChild(document.createTextNode(`${users[i].expense} - ${users[i].description} - ${users[i].category}       `))
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

        axios.delete(url+`/${item.id}`)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))

        // for(let i=0; i<localStorage.length; i++){
        //     if(item.id === localStorage.key(i)){
        //         localStorage.removeItem(localStorage.key(i))
        //     }
        // }
    }else if(e.target.classList.contains("edit")){
        let id = e.target.parentElement.id
        infoList.removeChild(e.target.parentElement)

        axios.get(url+`/${id}`)
        .then((res)=>{
            document.querySelector("#expense").value = res.data.expense
            document.querySelector("#description").value = res.data.description
            document.querySelector("#category").value = res.data.category

            axios.delete(url+`/${res.data._id}`)
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
        
        })
    }
}

function getUersFromBackend(e){
    
    axios.get(url)
    .then((res)=>{
        displayExpense(res.data)
    })
}



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
let url = `https://crudcrud.com/api/5266115099b340799bc6385c1366cfab/expenseData`
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


    // axios.post(url, exp1)
    // .then((res)=>{
    //     console.log(res)
    //     displayExpense([res.data])
    // })
    // .catch((err)=>console.log(err))

    let post = async ()=>{

        try {
            let res = await axios.post(url, exp1)
            console.log(res)
            displayExpense([res.data])
        } catch (error) {
            console.log(error)
        }
    }

    post()

}

function displayExpense(users){
    
    for(let i=0; i<users.length;i++){
        
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

        // axios.delete(url+`/${item.id}`)
        // .then((res)=>console.log(res))
        // .catch((err)=>console.log(err))

        async function del(){

            try {
                let res = await axios.delete(url+`/${item.id}`)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }

        del()


    }else if(e.target.classList.contains("edit")){
        let id = e.target.parentElement.id
        infoList.removeChild(e.target.parentElement)

        // axios.get(url+`/${id}`)
        // .then((res)=>{
        //     document.querySelector("#expense").value = res.data.expense
        //     document.querySelector("#description").value = res.data.description
        //     document.querySelector("#category").value = res.data.category

        //     axios.delete(url+`/${res.data._id}`)
        //     .then((res)=>console.log(res))
        //     .catch((err)=>console.log(err))
        
        // })

        async function edit(){
            try {
                let r1 = await axios.get(url+`/${id}`)
                console.log(r1)
                document.querySelector("#expense").value = r1.data.expense
                document.querySelector("#description").value = r1.data.description
                document.querySelector("#category").value = r1.data.category

                let r2 = await axios.delete(url+`/${r1.data._id}`)
                console.log(r2)

            } catch (error) {
                console.log(error)
            }
        }

        edit()
    }
}

function getUersFromBackend(e){
    
    // axios.get(url)
    // .then((res)=>{
    //     displayExpense(res.data)
    // })

    async function getUsers(){
        try {
            let r1 = await axios.get(url)
            displayExpense(r1.data)
        } catch (error) {
            console.log(error)
        }
    }

    getUsers()
}


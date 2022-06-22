
var form = document.querySelector(".form")

var newDiv = document.querySelector(".userInfo")



form.addEventListener("submit", storeValues)
window.addEventListener("load" , getUsersFromBackend)
newDiv.addEventListener("click", deleteUser)


function storeValues(e){
    e.preventDefault()

    console.log("Store called")
    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var phone = document.querySelector("#phone").value
    var date = document.querySelector("#date").value
    var time = document.querySelector("#time").value

    let obj ={
        name,
        email,
        phone,
        date,
        time
    } 
    // LocalStorage only stores values in string for so we have to convet the
    // object into string form and this process is called serialization
    // Serializing object to string 
    // var u1_Serialized = JSON.stringify(u1)
    // localStorage.setItem('u_'+email, u1_Serialized)

    axios.post("https://crudcrud.com/api/abedbfff0cd1450d992e3703fd9122d8/appointmentData", obj)
    .then((response)=>{
        displayUser([response.data])
        console.log(response)
    })
    .catch(err=>console.log(err))

}

function displayUser(users){
    //alert("its working")

    for(let i=0; i<users.length; i++){

        var details = document.createElement("p")
        var deleteButton = document.createElement("button")
        var editButton = document.createElement("button")
        
        details.className = "userDetails"
        details.id = `${users[i]._id}`
        deleteButton.className = "btn delete"
        editButton.className = "btn edit"
        details.appendChild(document.createTextNode(users[i].name+":  "+ users[i].email))
    
        deleteButton.appendChild(document.createTextNode("X"))
        editButton.appendChild(document.createTextNode("Edit"))
        deleteButton.style.float = "right"
        editButton.style.float = "right"
        
        
        details.appendChild(deleteButton)
        details.appendChild(editButton)
        newDiv.appendChild(details)
    }

        
}

function deleteUser(e){

    //console.log(e)
    if(e.target.classList.contains("delete")){
        
         var item = e.target.parentElement
         console.log(item)
         newDiv.removeChild(item)
        
         console.log(item.id)
        let url = `https://crudcrud.com/api/abedbfff0cd1450d992e3703fd9122d8/appointmentData/${item.id}`
         axios.delete(url)
         .then(res=>console.log(res))
         .catch(err=>console.log(err))
     }else if(e.target.classList.contains("edit")){
        var item = e.target.parentElement
        console.log(item)
        newDiv.removeChild(item)
       
        console.log(item.id)
        let url = `https://crudcrud.com/api/abedbfff0cd1450d992e3703fd9122d8/appointmentData/${item.id}`
        axios.get(url)
        .then((res)=>{
            document.querySelector("#name").value = res.data.name
            document.querySelector("#email").value = res.data.email
            document.querySelector("#phone").value = res.data.phone
            document.querySelector("#date").value = res.data.date
            document.querySelector("#time").value = res.data.time

            axios.delete(`https://crudcrud.com/api/abedbfff0cd1450d992e3703fd9122d8/appointmentData/${res.data._id}`)
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
        })
        .catch((err)=>console.log(err))

     }
}

function getUsersFromBackend(){

    axios.get("https://crudcrud.com/api/abedbfff0cd1450d992e3703fd9122d8/appointmentData")
    .then((res)=>{
        displayUser(res.data)
        console.log(res)
    })
    .catch(err=>console.log(err))
}


var form = document.querySelector(".form")

form.addEventListener("submit", storeValues)
window.addEventListener("load" , displayUser)

function storeValues(e){
    e.preventDefault()

    function user(name, email, phone, date, time){
        this.name = name
        this.email = email
        this.phone = phone
        this.date = date
        this.time = time 
    }

    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var phone = document.querySelector("#phone").value
    var date = document.querySelector("#date").value
    var time = document.querySelector("#time").value

    u1 = new user(name, email, phone, date, time)
    
    // LocalStorage only stores values in string for so we have to convet the
    // object into string form and this process is called serialization
    // Serializing object to string 
    var u1_Serialized = JSON.stringify(u1)
    localStorage.setItem('user1', u1_Serialized)

}

function displayUser(e){
    alert("its working")
    var user = JSON.parse(localStorage.getItem("user1"))
    console.log(user)
    var form = document.querySelector(".form-container")

    var newDiv = document.createElement("div")
    newDiv.style.backgroundColor = "black"

    var details = document.createElement("p")

    details.appendChild(document.createTextNode(user.name+"  "))
    details.appendChild(document.createTextNode(user.date+"  "))
    details.appendChild(document.createTextNode(user.time+"  "))

    newDiv.appendChild(details)
    form.appendChild(newDiv)

}

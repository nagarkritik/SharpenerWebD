
var form = document.querySelector(".form")

form.addEventListener("submit", storeValues)

function storeValues(e){
    e.preventDefault()
    var name = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var phone = document.querySelector("#phone").value
    var date = document.querySelector("#date").value
    var time = document.querySelector("#time").value

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone)
    localStorage.setItem("date", date)
    localStorage.setItem("time", time)
}
// var hoTen = "El Matador "
// var integerNumber = 21
// var isVietnamese = true
// var list = ["Cavani", "Suarez", "Valverde", "Godin"] 
// console.log(list[0])
// console.log(list.length)
// console.log(hoTen + integerNumber)
var Clickme_Button = document.getElementById("button")

console.log(Clickme_Button)

function onclick() {
    console.log("Click successful")
}

function alert_info() {
    alert("Click successful")
}

Clickme_Button.addEventListener("click", alert_info)
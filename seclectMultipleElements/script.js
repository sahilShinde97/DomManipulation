
/*
var h = document.querySelectorAll("h1")

 h.forEach(function(e){
    console.log(e)
 })

 */

 //BY ID or class

// document.getElementById("box")
// document.getElementsByClassName("khoka")

var box = document.querySelector("#box")

box.innerHTML = "<h1>hello</h1>" //style like normal html tag h1
box.textContent = "<h1>bye</h1>"//but its complete print in text form

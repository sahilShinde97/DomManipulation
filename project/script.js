var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0

btn.addEventListener("click",function(){
    if(flag == 0){
        btn.innerHTML = "on"
    bulb.style.backgroundColor = "yellow"
    console.log("click")
    flag = 1
    }else{
        bulb.style.backgroundColor = "transparent"
        console.log("Again click")
        btn.innerHTML = "Of"
        flag = 0
    }
})

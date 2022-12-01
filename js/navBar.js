
let body = document.getElementById("body")
let menu = document.getElementById("menu_burgger")
let rutas = document.getElementById("rutas-container")
let antY = 0
let navBar = document.getElementById("nav-container")
let rutasContainer = document.getElementById("rutas-container")
let flagMenu = 0
menu.addEventListener("click",()=>{
    rutas.classList.toggle("switch-hidden")
    
    if(flagMenu ===0){
        menu.src="/img/close.svg"
        flagMenu= 1
    }
    else{
        menu.src="img/menu.svg"
        flagMenu =0
    }
    
})

window.addEventListener("scroll",(event)=>{
    console.log(event.path[1].pageYOffset)
    //console.log(window.innerHeight)
    let acty = antY-event.path[1].pageYOffset
    console.log(acty)
    antY = event.path[1].pageYOffset

    
    if(acty < 0){
        navBar.style = "transform: translateY(-100%); ";
    }
    else{
        navBar.style = "transform: translateY(0%);";
    }
    if(event.path[1].pageYOffset < 5){
        navBar.classList.remove("nav-color")
        rutasContainer.classList.remove("rutas-margin")
    }
    else{
        rutasContainer.classList.add("rutas-margin")
        navBar.classList.add("nav-color")
    }

})
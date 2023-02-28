
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
    
    //console.log(window.innerHeight)
    let acty = antY-event.target.scrollingElement.scrollTop
    antY = event.target.scrollingElement.scrollTop

    
    if(acty < 0){
        navBar.style = "transform: translateY(-100%); ";
        
        if(rutasContainer.classList.contains("switch-hidden")){
            rutasContainer.classList.remove("switch-hidden");
            menu.src="assets/img/menu.svg"
            flagMenu =0
            
            
        }else{
            
        }
        
    }
    else{
        navBar.style = "transform: translateY(0%);";
        // if(rutasContainer.classList)
        // rutasContainer.classList.add("switch-hidden");
        
    }

    if(window.scrollY === 0){
        rutasContainer.classList.remove("rutas-margin")
        navBar.classList.remove("nav-color")
        
    }else{
        rutasContainer.classList.add("rutas-margin")
        navBar.classList.add("nav-color")
    }
    


})
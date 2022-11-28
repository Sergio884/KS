

let menu = document.getElementById("menu_burgger")
let rutas = document.getElementById("rutas-container")
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
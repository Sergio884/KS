document.addEventListener("DOMContentLoaded", function(){
    let arrows=document.getElementsByClassName("arrows");
    let contenedorSlider=document.getElementById("contenedor-slider-contenido");
    let bandera=0;
    let distancia=33.33;
    if(arrows){
        arrows[0].addEventListener("click",()=>{
            
            if(bandera==0){
                contenedorSlider.style.transform=`translateX(${-distancia*2}%)`;
                bandera=2;
            }
            else if (bandera==1) {
                contenedorSlider.style.transform=`translateX(${0}%)`;
                bandera=0;
            }
            else if (bandera==2){
                contenedorSlider.style.transform=`translateX(${-distancia}%)`;
                bandera=1;
            }

        });
        arrows[1].addEventListener("click",()=>{
            
            if(bandera==0){
                contenedorSlider.style.transform=`translateX(${-distancia}%)`;
                bandera=bandera+1;
            }
            else if (bandera==1) {
                contenedorSlider.style.transform=`translateX(${-(distancia*2)}%)`;
                bandera=bandera+1
            }
            else if (bandera==2){
                contenedorSlider.style.transform=`translateX(${0}%)`;
                bandera=0;
            }
        });

    }

    



});
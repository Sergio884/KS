document.addEventListener("DOMContentLoaded", function(){


    new Glider(document.querySelector('.slider-lista'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.slider-indicadores',
        arrows: {
            prev: '.atras',
            next: '.siguiente'
        },
        responsive: [
            {
                breakpoint:576,
                settings:{
                    slidesToShow: '2',
                    slidesToScroll: '2',
                }
            },
            {
              // screens greater than >= 775px
              breakpoint: 778,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '3',
                slidesToScroll: '3',
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: '4',
                slidesToScroll: '4',
              }
            }
          ]
    });

    // let links= document.querySelectorAll(".slider-link");
    // let imageneslink= document.querySelectorAll(".producto");
    // // while(true)
    // if(links){
    //     links[7].addEventListener("mouseover",function(){
    //         imageneslink[7].classList.add("productosch");
            
    //     });
    // }
            



});
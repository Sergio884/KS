document.addEventListener("DOMContentLoaded", function(){

    let a =new Glider(document.querySelector('.slider-services'),{
        slidesToShow: 1,
       
        draggable: true,
        dots: '.slider-indicadores',
        arrows: {
            prev: '.atras-service',
            next: '.siguiente-service'
        },responsive: [
            
            {
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: '2',
                slidesToScroll: '2',
              }
            }
          ]
      });
      console.log(a)

});
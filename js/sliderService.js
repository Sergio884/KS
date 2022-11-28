document.addEventListener("DOMContentLoaded", function(){

    let a =new Glider(document.querySelector('.slider-services'),{
        slidesToShow: 2,
       
        draggable: true,
        dots: '.slider-indicadores',
        arrows: {
            prev: '.atras',
            next: '.siguiente'
        }
      });
      console.log(a)

});
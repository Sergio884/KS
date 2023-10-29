gsap.registerPlugin(ScrollTrigger);
gsap.set('.title',{
    x:'-700px',
})

gsap.set('.principal-image',{
    x:'800px',
    opacity: 0,
})

gsap.set('.contact-hero',{
    x:'-500px',
    opacity: 0,
})

gsap.set('.whatsapp',{
    opacity: 0,
    scale: 0,
})

gsap.timeline()
.to('.title',{
    duration:0.5,
    x:0,
})
.to('.principal-image',{
    duration:1,
    x:0,
    opacity: 1,
})
.to('.contact-hero',{
    duration:0.2,
    x:0,
    opacity: 1,
})
.to('.whatsapp',{
    duration: 1,
    opacity: 1,
    rotate: 360,
    scale: 1,
})



gsap.registerPlugin(ScrollTrigger);
gsap.set('.service-image', { 
    x: '-700px',
    opacity:0
});

gsap.to('.service-image', {
  x: '0px',
  duration:1.5,
  opacity: 1,
  scrollTrigger: {
    trigger: '.service-image',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play none none reverse', 
  },
});


gsap.set('.aumento', { 
    y: '300px',
    scale:0,
    opacity:0
});

gsap.to('.aumento', {
  y: '0px',
  scale:1,
  duration:1.5,
  opacity: 1,
  scrollTrigger: {
    markers: false,
    trigger: '.parte1',
    start: 'top center+=10%',
    end: 'bottom center+=10%',
    toggleActions: 'play none none reverse', 
  },
});



gsap.set('.trabajos-contenedor', { 
    y: '300px',
    scale:0,
    opacity:0.1
});

gsap.to('.trabajos-contenedor', {
  y: '0px',
  scale:1,
  duration:1.5,
  opacity: 1,
  scrollTrigger: {
    markers: false,
    trigger: '.parte2',
    start: 'top center+=10%',
    end: 'bottom center+=10%',
    toggleActions: 'play none none reverse', 
  },
});


// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true,
//  lerp:0.
  
  
// });
const scroll = new LocomotiveScroll({
  el: document.querySelector('body'),
  smooth: true,
  lerp:0.03,

});



gsap.from(" .nav", {
  scale: 0.7,
  opacity: 0,
  delay: 1,
  duration: 0.5,
});


var typed= new Typed(".autotyping",{
  strings:[" Rishav","PORTFOLIO.."],
  typeSpeed:40, backSpeed:50,loop:true,backDelay:1500

})
var menu = document.querySelector('.menu')
var nav = document.querySelector('.navigationbar')
menu.addEventListener("click",function(){
    // cursor.style.opacity="0"
    // cursor.style.scale="0"
    nav.style.opacity="1"
   

    })
    var menu = document.querySelector('#x')
var nav = document.querySelector('.navigationbar')
menu.addEventListener("click",function(){
    // cursor.style.opacity="0"
    // cursor.style.scale="0"
    nav.style.opacity="0"
   

    })

var mnu = document.querySelector(".menu");
var close = document.querySelector(".cross");
var nav = document.querySelector(".responsive_nav");

mnu.addEventListener("click",function(){
    nav.style.display= "0%";
})
close.addEventListener("click",function(){
    nav.style.right= "-100%";
})
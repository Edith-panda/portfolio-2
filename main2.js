let nav =document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add ("header-scrolled");
    }else{
     nav.classList.remove("header-scrolled");
    }
}
let navBar=document.querySelectorAll(".nav-link");
let navcollaspse = document.querySelector(".navbar-collaspse.collaspe");
navBar.forEach(function (a){
    a.addEventListener("click",function(){
        navcollaspse.classList.remove("show");
    })
})

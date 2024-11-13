let slide1 = document.querySelector(".cont");
let slide2 = document.querySelector(".banner");
let slide3 = document.querySelector("#section2");
let slide4 = document.querySelector("#section3");
let slide5 = document.querySelector(".cont4");
let slide6 = document.querySelector("#section4 ul");


window.addEventListener("scroll",function(){
    let value = window.scrollY

    if(value > 270){
        slide1.style.animation = 'slideUp 2s ease-out forwards';
    }
    if(value > 511){
        slide2.style.animation = 'slideUp 2s ease-out forwards';
    }
    if(value > 972){
        slide3.style.animation = 'slideUp 2s ease-out forwards';
    }
    if(value > 2003){
        slide4.style.animation = 'slideUp 2s ease-out forwards';
    }
    if(value > 2700){
        slide5.style.animation = 'slideUp 2s ease-out forwards';
    }
    if(value > 3070){
        slide6.style.animation = 'slideUp 2s ease-out forwards';
    }
});

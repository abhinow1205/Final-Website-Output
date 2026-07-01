fetch("components/hero_slider.html")

.then(res=>res.text())

.then(data=>{

document.getElementById("hero_slider").innerHTML=data;

initHeroSlider();

});



function initHeroSlider(){

const slides=document.querySelectorAll(".heroSlide");

const dotsContainer=document.querySelector(".heroDots");

const prev=document.querySelector(".heroPrev");

const next=document.querySelector(".heroNext");

let current=0;

let interval;


/*==============================
CREATE DOTS
==============================*/

slides.forEach((slide,index)=>{

const dot=document.createElement("span");

dot.className="heroDot";

if(index===0){

dot.classList.add("active");

}

dot.addEventListener("click",()=>{

current=index;

showSlide();

resetAuto();

});

dotsContainer.appendChild(dot);

});

const dots=document.querySelectorAll(".heroDot");


/*==============================
SHOW SLIDE
==============================*/

function showSlide(){

slides.forEach(slide=>slide.classList.remove("active"));

dots.forEach(dot=>dot.classList.remove("active"));

slides[current].classList.add("active");

dots[current].classList.add("active");

}


/*==============================
NEXT
==============================*/

function nextSlide(){

current++;

if(current>=slides.length){

current=0;

}

showSlide();

}


/*==============================
PREVIOUS
==============================*/

function prevSlide(){

current--;

if(current<0){

current=slides.length-1;

}

showSlide();

}


/*==============================
BUTTON EVENTS
==============================*/

next.addEventListener("click",()=>{

nextSlide();

resetAuto();

});

prev.addEventListener("click",()=>{

prevSlide();

resetAuto();

});


/*==============================
AUTOPLAY
==============================*/

function startAuto(){

interval=setInterval(nextSlide,5000);

}

function resetAuto(){

clearInterval(interval);

startAuto();

}

startAuto();


/*==============================
PAUSE ON HOVER
==============================*/

const slider=document.querySelector(".heroSlider");

slider.addEventListener("mouseenter",()=>{

clearInterval(interval);

});

slider.addEventListener("mouseleave",()=>{

startAuto();

});


/*==============================
SWIPE SUPPORT
==============================*/

let startX=0;

slider.addEventListener("touchstart",(e)=>{

startX=e.changedTouches[0].clientX;

});

slider.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

let diff=startX-endX;

if(Math.abs(diff)<50)return;

if(diff>0){

nextSlide();

}else{

prevSlide();

}

resetAuto();

});

}
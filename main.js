let hamburger = document.querySelector(".hamburger");
let navlinks = document.querySelector(".navlinks ul");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
    document.querySelector(".blur-background").classList.toggle("active");
})
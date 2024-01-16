// Responsive Nav
// hamburger = document.querySelector('.hamburger')
// navbar = document.querySelector('.navbar')
// logo = document.querySelector('.logo')
// navlist = document.querySelector('.navlist')
// const navlistitem = document.querySelectorAll('.navlistitem')

// hamburger.addEventListener('click',()=>{
//     logo.classList .toggle('v-item');
//     navlist.classList .toggle('v-item');
//     navbar.classList .toggle('h-nav')
// });
// navlistitem.forEach(element => {
//     element.addEventListener('click',()=>{
//         logo.classList .toggle('v-item');
//         navlist.classList .toggle('v-item');
//     });
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}





// image slideshow
var img = document.getElementById('img');

var slides=['bartender-1.jpg', 'pinacolada.jpg','mocktail_cover.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    img.innerHTML = "<img src= IMAGES/"+slides[Start-1]+">";
   
}
setInterval(slider,3000);

// Menu Dots

$('h3 span:first-child').after("<span class=\"dots\"> </span>");

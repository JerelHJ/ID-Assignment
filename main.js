
/*=============== SHOW MENU ===============*/

const navMenu =document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //rest: true
})

sr.reveal('.home_title, .popular_container, .features_img, .featured_filter')
sr.reveal('.home_subtitle',{delay: 500})
sr.reveal('.home_electric',{delay: 500})
sr.reveal('.home_car-data',{delay: 900, interval:100, origin: 'bottom'})
sr.reveal('.home_button',{delay: 1000,  origin: 'bottom'})
sr.reveal('.about_group, .offer_data',{ origin: 'left'})
sr.reveal('.about_data, .offer_img',{ origin: 'right'})
sr.reveal('.features_card', {interval:300})
sr.reveal('.featured_card, .footer_content', {interval:100})
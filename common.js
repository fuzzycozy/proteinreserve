
$('header').load('inc.html header',navi);

$('footer').load('inc.html footer');


///////////////// header ////////////////////////////////////////////////////////////

function navi(){
    
let burger = document.querySelector('.burger');
let header;
let logo;
let nav;
let cover;
let menu = $('.burg_wrap li');


// 버거메뉴 버튼.
burger.addEventListener('click', function () {
    burg_btn();
})

// 서브메뉴.
menu.eq(0).click(function(){
    sub();
})

function burg_btn() {

    let header = document.querySelector('header');
    let logo = document.querySelector('h1');
    let nav = document.querySelector('.burg_wrap');
    let cover = document.querySelector('.cover');
    

    burger.classList.toggle('active');
    header.classList.toggle('active');
    logo.classList.toggle('active');
    nav.classList.toggle('active');
    cover.classList.toggle('active');
}


function sub(){
    event.preventDefault;
    $('.sub_btn').toggleClass('active');
    $('.sub').slideToggle();
}
}
////////////////////////////////////////////////////////////////////////////////

$('.txt').text()







////////////// swiper ///////////////////////////////////////////////////////////
var swiper = new Swiper(".journey", {
    spaceBetween: 30,
    effect: "fade",
    mousewheel: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
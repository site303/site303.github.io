const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // mobile + tablet - 320-990
      320: {
        slidesPerView: 1
      },
      // desktop >= 991
      991: {
        slidesPerView: 2
      }
    }
  });
  


  let body = document.querySelector('body');

// всплывающее меню

// let burger = document.querySelector('.hamburger');
// let burgerClose = document.querySelector('.hamburger_close');
// let menu = document.querySelector('.menu');
// let menuActive = document.querySelector('.menu_active');
// let links = document.querySelectorAll('.menu a');

// burger.addEventListener('click', function(){
//   body.classList.toggle('lock');
//   menu.classList.toggle('menu_active');
//   burgerClose.style.display="block";
//   burger.style.display="none";
// })

// burgerClose.addEventListener('click', function(){
//   body.classList.toggle('lock');
//   menu.classList.toggle('menu_active');
//   burgerClose.style.display="none";
//   burger.style.display="block";
// })

// links.forEach(link => {
//   link.addEventListener('click', function() {
//     document.body.classList.remove('lock'); 
//     menu.classList.remove('menu_active'); 
//     burgerClose.style.display = "none"; 
//     burger.style.display = "block"; 
//   });
// });

let burger = document.querySelector('.hamburger');
let burgerClose = document.querySelector('.hamburger_close');
let menu = document.querySelector('.menu');
let menuActive = document.querySelector('.menu_active');
let links = document.querySelectorAll('.menu a');

burger.addEventListener('click', function(){
  body.classList.add('lock');
  menu.classList.add('menu_active');
  burgerClose.style.display = "block";
  burger.style.display = "none";
})

burgerClose.addEventListener('click', function(){
  body.classList.remove('lock');
  menu.classList.remove('menu_active');
  burgerClose.style.display = "none";
  burger.style.display = "block";
})

links.forEach(link => {
  link.addEventListener('click', function() {
    body.classList.remove('lock'); // Убираем класс 'lock' у body
    menu.classList.remove('menu_active'); // Убираем класс 'menu_active' у меню
    burgerClose.style.display = "none"; // Скрываем кнопку закрытия меню
    burger.style.display = "block"; // Показываем кнопку открытия меню
  });
});




// изменение цвета при наведении на контакты
// 1 вариант

// let contactsContainer = document.querySelector('.footer-top_menu-items');

// let contactsItems = contactsContainer.getElementsByTagName('li');
// contactsItems = Array.from(contactsItems);
// contactsItems.forEach((item) => {
//   let contactLinks = item.getElementsByTagName('a');
//   contactLinks = Array.from(contactLinks);
//   contactLinks.forEach((contactLink) =>{
//     contactSvgs = contactLink.getElementsByTagName('svg');
//     let contactSvg = contactSvgs[0];
//     contactSpans = contactLink.getElementsByTagName('span');
//     let contactSpan = contactSpans[0];

//     contactLink.addEventListener('mouseover', function(){
//       contactSvg.style.fill = "rgb(94, 116, 51)";
//       contactSpan.style.color = "rgb(94, 116, 51)";
//     })
    
//     contactLink.addEventListener('mouseout', function(){
//       contactSvg.style.fill = "rgb(45 61 37)";
//       contactSpan.style.color = "rgb(45 61 37)";
//     }) 
//   })
// })

// изменение цвета при наведении на контакты
//  2 вариант
// let contactsContainer = document.querySelector('.footer-top_menu-items');
// contactsContainer.addEventListener("mouseover", function(e) {
//   e.preventDefault();
//   let contactLink = e.target.closest(".footer-top_menu-link");
//   if (contactLink != null) {
//     contactSvgs = contactLink.getElementsByTagName('svg');
//     let contactSvg = contactSvgs[0];
//     contactSpans = contactLink.getElementsByTagName('span');
//     let contactSpan = contactSpans[0];

//     contactLink.addEventListener('mouseover', function(){
//       contactSvg.style.fill = "rgb(94, 116, 51)";
//       contactSpan.style.color = "rgb(94, 116, 51)";
//     })
    
//     contactLink.addEventListener('mouseout', function(){
//       contactSvg.style.fill = "rgb(45 61 37)";
//       contactSpan.style.color = "rgb(45 61 37)";
//     })
//   }
// })

// всплывающее окно с формой на обратную связь

const btnOpenModal = document.querySelector(".show-modal");
const modalWindow = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

 
  btnOpenModal.addEventListener("click", function () {
    body.classList.add('lock');
    overlay.classList.toggle("hidden");
    modalWindow.classList.toggle("hidden");
  });


btnCloseModal.addEventListener("click", function () {
  body.classList.remove('lock');
  overlay.classList.toggle("hidden");
  modalWindow.classList.toggle("hidden");
});



document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    body.classList.remove('lock');
    overlay.classList.add("hidden");
    modalWindow.classList.add("hidden");
  }
});





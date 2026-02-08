(function(){
  // плейсхолред на телефон
  const telInputs = document.querySelectorAll("input[type='tel']")
  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(telInputs)
  

  // бургер меню

document.addEventListener("click", burgerInit)

function burgerInit(e) {
  const body = document.body
  const target = e.target
  const navMobile = document.querySelector(".nav--mobile")
  const burgerIcon = target.closest(".burger__menu")
  const navLink = target.closest(".nav__item--mobile")
  const navButton = target.closest(".header__button--mobile")
  const width = document.documentElement.clientWidth

  if (width > 800) return

  // Клик по бургеру — toggle
  if (burgerIcon) {
    burgerIcon.classList.toggle("burger__menu--active")
    body.classList.toggle("body--opened-menu")
    navMobile.classList.toggle("nav--mobile--active")
    return
  }

  // Клик по ссылке или кнопке — всегда закрываем меню
  if (navLink || navButton) {
    const burger = document.querySelector(".burger__menu")

    burger.classList.remove("burger__menu--active")
    body.classList.remove("body--opened-menu")
    navMobile.classList.remove("nav--mobile--active")
  }
}


        // ---------------------team_swiper-----------------------------

// Левый слайдер (миниатюры)
const thumbsSwiper = new Swiper('.team__swiper-left', {
  spaceBetween: -10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  
  scrollbar: {
    el: '.team__scrollbar',
    draggable: true,
  },
  breakpoints: {
  800: {
    spaceBetween: 32
  }
}

});

// Функция показа члена команды
function showTeamMember(index) {
  // Все правые слайды
  const rightSlides = document.querySelectorAll('.team__slide-right');
  const leftSlides = document.querySelectorAll('.team__slide-left');
  
  // Прячем все
  rightSlides.forEach(slide => {
    slide.classList.remove('active');
    // slide.style.opacity = '0';
    slide.style.visibility = 'hidden';
    
  });
  leftSlides.forEach(slide => {
    slide.classList.remove('active-left');
  });
  
  // Показываем нужный
  if (rightSlides[index] && leftSlides[index]) {
    rightSlides[index].classList.add('active');
    leftSlides[index].classList.add('active-left');

    // rightSlides[index].style.opacity = '1';
    rightSlides[index].style.visibility = 'visible';
  }
}

// Клик по миниатюре
document.querySelectorAll('.team__slide-left').forEach((slide, index) => {
  slide.addEventListener('click', () => {
    thumbsSwiper.slideTo(index);
    showTeamMember(index);
  });
});


showTeamMember(0);


 //  Акардион 

  const accordionLists = document.querySelectorAll(".accordion-list")
  accordionLists.forEach(el => {
    el.addEventListener("click", e => {
      const accordionList = e.currentTarget
      const accordionOpen = accordionList.querySelector(".accordion-list__item--opened")
      const accordionControl = e.target.closest(".accordion-list__control")

      if (!accordionControl) return
      e.preventDefault()
      const accordionItem = accordionControl.parentElement;
      if (accordionOpen && accordionItem != accordionOpen) {
        accordionOpen.classList.remove("accordion-list__item--opened")
      }

      accordionItem.classList.toggle("accordion-list__item--opened")


    })
  })
    
})()
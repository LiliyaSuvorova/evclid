
// ТАБЫ
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work__button').forEach(function(workButton){
    workButton.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.work__button').forEach(function(btn){
        btn.classList.remove('work__button__active')});
      e.currentTarget.classList.add('work__button__active');


      document.querySelectorAll('.work__banner').forEach(function(workBanner){
        workBanner.classList.remove('work__banner__active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('work__banner__active');
    });
  });
});


// БУРГЕР
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.toggle('is-active')
  })

  document.querySelector('.header__burger__btn__menu').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.toggle('is-active')
  })
})


// ЛУПА
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__search').addEventListener('click', function() {
    document.querySelector('.form').classList.toggle('form__active')
  })

  document.querySelector('.form__search-close').addEventListener('click', function() {
    document.querySelector('.form').classList.toggle('form__active')
  })
})

// СЛАЙДЕР

const swiper = new Swiper('.swiper', {
  // slidesPerView: 1,
  // loop: true,
  a11y: {
    paginationBulletMessage: 'Перейти на слайд {{index}}'
  },
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true ,
  },
});

// var swiperSpans = document.querySelectorAll ('.swiper-pagination-bullet');
// swiperSpans.forEach( function( currentValue, index ) {
//   currentValue.setAttribute ('aria-label', 'Слайд ' + index);
// });


//АККОРДИОН

$(".accordion").accordion({
  collapsible: true,
  heightStyle: "content"
});


// изображения
function testWebP(elem) {
  const webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

  webP.onload = webP.onerror = function () {
    console.log(webP.height);
    webP.height === 2 ? elem.classList.add('webp-true') : elem.classList.add('webp-false');
  };
}


function testAvif(elem) {
  const avif = new Image();
  avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABwAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACRtZGF0EgAKCBgANogQEDQgMg4YQAAAUXAAAcV0bpqgHg==';

  avif.onload = avif.onerror = function () {
    avif.height === 2 ? elem.classList.add('avif-true') : elem.classList.add('avif-false');
  };
}

testWebP(document.body);
testAvif(document.body);

const swiper = new Swiper('.swiper', {
  slidePerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  effect: 'flip',
  grabCursor: true,
  loop: true,
  speed: 500,

  breakpoints: {
    969: {
      slidesPerView: 3,
      loop: false,
      effect: 'none'
    }
  }
})

const leftArrow = document.querySelector('#leftArrow')
const rightArrow = document.querySelector('#rightArrow')

leftArrow.addEventListener('mouseenter', function () {
  document.querySelector('#leftArrow').src = 'img/handPointingLeftActive.png'
})

leftArrow.addEventListener('mouseleave', function () {
  document.querySelector('#leftArrow').src = 'img/handPointingLeft.png'
})

rightArrow.addEventListener('mouseenter', function () {
  document.querySelector('#rightArrow').src = 'img/handPointingRightActive.png'
})

rightArrow.addEventListener('mouseleave', function () {
  document.querySelector('#rightArrow').src = 'img/handPointingRight.png'
})

leftArrow.addEventListener('touchstart', function () {
  document.querySelector('#leftArrow').src = 'img/handPointingLeftActive.png'
})

rightArrow.addEventListener('touchstart', function () {
  document.querySelector('#rightArrow').src = 'img/handPointingRightActive.png'
})

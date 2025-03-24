const swiper = new Swiper('.swiper-wrapper', {
    loop: true,
    spaceInBetween: true
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //break points 
    breakpoints: {
        // when window width is >= 320px
        375: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        650: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1020: {
          slidesPerView: 3,
          spaceBetween: 30
        }
    }
});
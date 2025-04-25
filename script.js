const swiper = new Swiper('.wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination
    pagination: {
      el: '.swiper-pagination',
        clickable: true,
        dinamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Puntos de quiebre
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
  });
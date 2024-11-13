 const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        autoplay: {
            delay: 5000, //add
            disableOnInteraction: false,
          },
          speed: 1500,
          loop: true,
          loopedSlides: 1,
          loopAdditionalSlides: 1,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


      
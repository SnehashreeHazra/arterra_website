  var swiper = new Swiper(".swiper", {
    slidesPerView: 1, 
    spaceBetween: 10,
    loop: true, 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
  });


  var swiper2 = new Swiper(".slider-2-container", {
    slidesPerView: 4, // Show 4 images at a time
    spaceBetween: 80, // Space between images
    loop: true, // Infinite scrolling
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
  });
  
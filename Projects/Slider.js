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
  //   breakpoints: {
  //   999: {
  //     spaceBetween: 20, // Reduce space between slides when width is 600px or less
      
  //   },
  //   400: {
  //     spaceBetween: 10, // Further reduce space for smaller screens
  //     slidesPerView: 1, // Show only 1 slide for very small screens
  //   }
  // }
  });
  
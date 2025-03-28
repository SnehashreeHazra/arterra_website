  
  document.addEventListener("DOMContentLoaded", function () {
    const mainSwiper = document.querySelector(".new-cruise-container .swiper .swiper-wrapper");
    const mainImages = mainSwiper.querySelectorAll(".swiper-slide img");
    const thumbnails = document.querySelectorAll(".slider-2-container .swiper-slide img");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            // Get the currently active slide in the main slider
            const activeSlide = mainSwiper.querySelector(".swiper-slide-active img");

            if (activeSlide) {
                activeSlide.src = this.src;
            }
        });
    });
});

  
  
  
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1, 
    spaceBetween: 10,
    loop: true, 
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    effect: "slide", // Keeps the default sliding effect
    easing: "ease-in-out", // Smoothens slide transition
  });


  var swiper2 = new Swiper(".slider-2-container", {
    slidesPerView: 4, // Show 4 images at a time
    spaceBetween: 20, // Space between images
    loop: true, // Infinite scrolling
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    effect: "slide", // Keeps the default sliding effect
    easing: "ease-in-out", // Smoothens slide transition
    
    breakpoints: {
      400: {
        spaceBetween: 5
      }
    }
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
  
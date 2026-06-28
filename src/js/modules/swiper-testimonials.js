import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";


export function initTestimonialsSwiper() {
  new Swiper(".testimonials__slider", {
    modules: [Navigation, Pagination],

    slidesPerView: 1,
    spaceBetween: 25,
     grabCursor: true,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
       dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });
}
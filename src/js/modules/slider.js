import Swiper, { Navigation, Pagination } from 'swiper'; 
function slider () {
    const swiper = new Swiper('.about-us-slider', {
        modules: [ Navigation, Pagination ],
        loop: true,
        speed: 400,
        
        navigation: {
            nextEl: '.about-us-slider__next',
            prevEl: '.about-us-slider__prev'
        },
        breakpoints: {
            1120: {
                slidesPerView: 6,
                spaceBetween: 10
            },
            950:{
                slidesPerView: 5,
                spaceBetween: 15
            },
            750: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 15
              
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            }
        }
    });
}
export default slider;
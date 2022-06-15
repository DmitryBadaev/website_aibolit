import Swiper, { Navigation, Pagination } from 'swiper'; 
function slider () {
    const swiper = new Swiper('.swiper', {
        modules: [ Navigation, Pagination ],
        slidesPerView: 6,
        loop: true,
        speed: 400,
        spaceBetween: 15,
        autoplay: {
            delay: 500,
        },
        navigation: {
            nextEl: '.about-us-slider__next',
            prevEl: '.about-us-slider__prev'
        },
        // breakpoints: {
        //     750: {
        //         slidesPerView: 4,
        //         spaceBetween: 30
        //     },
        //     500: {
        //         slidesPerView: 3,
        //         spaceBetween: 30
              
        //     }
        // }
    });
}
export default slider;
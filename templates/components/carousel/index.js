import $ from 'jquery';
import 'slick-carousel';

function carouselInit() {
  $('.js-carousel-main')
    .slick({
      cssEase: 'ease-in-out',
      draggable: false,
      dots: true,
      slidesToShow: 1,
      lazyLoad: 'progressive',
      speed: 300,
      prevArrow: $('.js-carousel-ui-prev'),
      nextArrow: $('.js-carousel-ui-next'),
    });
}

const carousel = async () => {
  carouselInit();
};

export default carousel;

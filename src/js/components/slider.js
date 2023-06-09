import Swiper, {
  Navigation,
  Thumbs
} from 'swiper';


Swiper.use([Navigation, Thumbs]);


const resultsStat = document.querySelector('.results-stat__slider')

if (resultsStat) {
  const resultsSlider = new Swiper('.results-stat__nav', {
    slidesPerView: 3,
    spaceBetween: 40,
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides: true,
    allowSlideNext: false,
    allowSlidePrev: false,
  });

  const resultsSliderNav = new Swiper(resultsStat, {
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: ".results-stat__btn-next",
      prevEl: ".results-stat__btn-prev",
    },
    thumbs: {
      swiper: resultsSlider,
    },
  });
}

const tariffsItems = document.querySelector('.tariffs__items')


if (tariffsItems) {
  const tariffsSlider = new Swiper(tariffsItems, {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      }
    }
  });
}

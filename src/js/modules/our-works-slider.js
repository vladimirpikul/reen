const ourWorksSlider = (function () {
  $('.our-works-slider').slick({
    arrows: false,
    initialSlide: 4,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  // our works slider arrows handling
  $('.our-works-slider-wrap .slider-arrow.arrow-left').on('click', () => {
    $('.our-works-slider').slick('slickPrev');
  });
  $('.our-works-slider-wrap .slider-arrow.arrow-right').on('click', () => {
    $('.our-works-slider').slick('slickNext');
  });
});

export default ourWorksSlider;

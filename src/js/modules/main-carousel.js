const mainCarousel = () => {
  new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.carousel-control-next',
      prevEl: '.carousel-control-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
};

export default mainCarousel;

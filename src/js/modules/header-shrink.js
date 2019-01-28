const headerShrink = () => {
  // Header shrink on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 110) {
      $('.main-header').addClass('shrinked');
    } else {
      $('.main-header').removeClass('shrinked');
    }
  });
};

export default headerShrink;

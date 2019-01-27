const mobileBtn = () => {
  // mobile menu button
  $('.header-menu-mobile-btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('opened');
    $('#header-menu').toggleClass('show');
  });

  // submenu toggling
  $('#header-menu .header-menu-item').click(function () {
    $(this).children('.submenu-icon').toggleClass('opened');
    $(this).siblings('.dropdown-item-default').toggleClass('opened');
  });
};

export default mobileBtn;

const mobileMenu = () => {
  // Slick nav init
  $(() => {
    $('#header-menu').slicknav({
      appendTo: $('.header-menu-container'),
      label: '',
    });
  });
};

export default mobileMenu;

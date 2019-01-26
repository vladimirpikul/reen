const preventDef = () => {
  // Prevent default on click on header menu item
  $('#header-menu .dropdown-container .header-menu-item').on('click', (e) => {
    e.preventDefault();
  });
};

export default preventDef;

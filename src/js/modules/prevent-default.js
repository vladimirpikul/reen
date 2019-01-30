const preventDef = () => {
  // Prevent default on first click on dropdown header menu items
  $('#header-menu .dropdown-container .header-menu-item').one('click', false);
};

export default preventDef;

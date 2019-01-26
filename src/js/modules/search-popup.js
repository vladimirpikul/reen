const searchPopup = () => {
  // Header search popup
  $('.header-search .search-icon').on('click', (e) => {
    e.preventDefault();
    $('.search-input').toggleClass('show');
  });
};

export default searchPopup;

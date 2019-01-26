import searchPopup from './modules/search-popup';
import mainCarousel from './modules/main-carousel';
import ourWorksSlider from './modules/our-works-slider';
import headerShrink from './modules/header-shrink';
import mobileMenu from './modules/slick-nav';
import preventDef from './modules/prevent-default';

$(document).ready(() => {
  preventDef(); // preventing default browser actions on main menu
  searchPopup(); // header search popup
  headerShrink(); // header shrink on scroll
  ourWorksSlider(); // "our works" section slider (main func. + arrows)
  mobileMenu(); // mobile header menu
  mainCarousel();
});

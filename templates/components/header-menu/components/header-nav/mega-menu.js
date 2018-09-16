import $ from 'jquery';
import { hideCart } from '../cart';

// const showChild = event => {
//   $(event.currentTarget)
//     .parent()
//     .find('.js-unit-share__child')
//     .toggleClass('unit-share__child--show-child');
// };

function showMenu() {
  hideCart();

  $(this)
    .parent()
    .find('.js-mega-menu')
    .addClass('show');
}

export function hideMenu() {
  $(this)
    .parent()
    .find('.js-mega-menu')
    .removeClass('show');
}

const megaMenu = () => {
  $('.js-mega-menu-opener, .js-mega-menu')
    .mouseout(hideMenu)
    .mouseover(showMenu);

  // $('.js-mega-menu-opener').on('click', showChild);
};

export default megaMenu;

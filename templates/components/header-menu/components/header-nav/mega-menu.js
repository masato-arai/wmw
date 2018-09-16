import $ from 'jquery';
import { hideCart } from '../cart';

function showMenu() {
  hideCart();

  $(this)
    .parent()
    .find('.js-mega-menu-bridge')
    .addClass('show');

  const menuType = $(this).attr('menu-type');
  $(`.js-mega-menu[menu-type='${menuType}']`).addClass('show');
}

export function hideMenu() {
  $(this)
    .parent()
    .find('.js-mega-menu-bridge')
    .removeClass('show');

  const menuType = $(this).attr('menu-type');
  $(`.js-mega-menu[menu-type='${menuType}']`).removeClass('show');
}

const megaMenu = () => {
  $('.js-mega-menu-opener, .js-mega-menu-bridge, .js-mega-menu')
    .mouseout(hideMenu)
    .mouseover(showMenu);
};

export default megaMenu;

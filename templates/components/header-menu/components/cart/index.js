import $ from 'jquery';

function hideMenu() {
  $('.js-cart').removeClass('active');
}

function showMenu() {
  $('.js-cart').addClass('active');
}

function doNotClose(e) {
  e.stopPropagation();
}

const toggleCart = e => {
  e.stopPropagation();
  const $cart = $(e.target).next();
  if ($cart.hasClass('active')) {
    hideMenu();
  } else {
    showMenu();
  }
};

const cart = () => {
  $(window).on('click', hideMenu);
  $('.js-cart-opener').on('click', toggleCart);
  $('.js-cart').on('click', doNotClose);
  $('.js-kebab-menu-item').on('click', hideMenu);

  $('.js-kebab-menu-item').click(e => {
    e.preventDefault();
    const indexNumber = $(e.target).attr('slideNo');
    $('.js-carousel').slick('slickGoTo', indexNumber - 1);
    $('.js-kebab-menu-item')
      .not(e.target)
      .removeClass('active');
    $(e.target).addClass('active');
  });
};

export default cart;

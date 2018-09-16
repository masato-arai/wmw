import $ from 'jquery';

export function hideCart() {
  $('.js-cart').removeClass('active');
}

function showCart() {
  $('.js-cart').addClass('active');
}

function doNotClose(e) {
  e.stopPropagation();
}

const toggleCart = e => {
  e.stopPropagation();
  const $cart = $(e.target).next();
  if ($cart.hasClass('active')) {
    hideCart();
  } else {
    showCart();
  }
};

const cart = () => {
  $(window).on('click', hideCart);
  $('.js-cart-opener').on('click', toggleCart);
  $('.js-cart').on('click', doNotClose);
  $('.js-kebab-menu-item').on('click', hideCart);

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

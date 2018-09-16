import FastClick from 'fastclick';

import carousel from '../../templates/components/carousel';
import cart from '../../templates/components/header-menu/components/cart';
import megaMenu from '../../templates/components/header-menu/components/header-nav/mega-menu';

FastClick.attach(document.body);

carousel();
cart();
megaMenu();

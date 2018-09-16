import FastClick from 'fastclick';

import retinaImage from './modules/retina-image';

import carousel from '../../templates/components/carousel';
import cart from '../../templates/components/header-menu/components/cart';
import megaMenu from '../../templates/components/header-menu/components/header-nav/mega-menu';

FastClick.attach(document.body);

retinaImage();

carousel();
cart();
megaMenu();

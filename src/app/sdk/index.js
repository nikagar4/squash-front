import { bannerReducer, bannerAction } from './banner/index';
import { menuReducer, menuAction } from './menu/index';
import { productsReducer, productsAction } from './products/index';
import { userReducer, userAction } from './user/index';
import { sitemapReducer, sitemapAction } from './sitemap/index';

export const SDK_REDUCERS = {
  banner: bannerReducer,
  menu: menuReducer,
  products: productsReducer,
  user: userReducer,
  sitemap: sitemapReducer,
};

export { bannerAction, menuAction, productsAction, userAction, sitemapAction };

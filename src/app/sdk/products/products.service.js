import products from './products.const';

export const productsService = {
  getAll: () => {
    // this should use http client
    return new Promise((resolve, reject) => {
      let items = products
        .filter(product => !product.isFavorite)
        .map(product => {
          return {
            img: product.img,
            key: product.key,
            title: product.title,
            price: product.price,
          };
        });
      resolve(items);
    });
  },

  getFavorites: () => {
    return new Promise((resolve, reject) => {
      // this job could be done by just selector
      let items = products
        .filter(product => product.isFavorite)
        .map(product => {
          return {
            img: product.img,
            key: product.key,
            title: product.title,
            price: product.price,
          };
        });
      resolve(items);
    });
  },
};

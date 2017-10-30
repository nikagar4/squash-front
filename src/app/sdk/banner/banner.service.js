import bannerItems from './banner.const';

export const bannerService = {
  get: () => {
    // this should use http client
    return new Promise((resolve, reject) => {
      let items = bannerItems.map(item => {
        return {
          img: item.img,
          title: item.title,
          pageId: item.pageId,
        };
      });
      resolve(items);
    });
  },
};

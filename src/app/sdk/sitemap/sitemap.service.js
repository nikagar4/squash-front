import sitemap from './sitemap.const';

export const sitemapService = {
  get: () => {
    return new Promise((resolve, reject) => {
      // this sdk might be merged with menu sdk
      let items = sitemap.map(item => {
        return {
          key: item.key,
          link: item.link,
          name: item.name,
        };
      });
      resolve(items);
    });
  },
};

import { resolve } from 'path';

const pages = [
  { name: 'main', path: resolve(__dirname, './src/index.html') },
  { name: 'db-overview', path: resolve(__dirname, './src/db-overview.html') },
  { name: 'db-products', path: resolve(__dirname, './src/db-products.html') },
  { name: 'db-global-vision', path: resolve(__dirname, './src/db-global-vision.html') },
  { name: 'db-giving', path: resolve(__dirname, './src/db-giving.html') },
  { name: 'db-sustainable', path: resolve(__dirname, './src/db-sustainable.html') },
  { name: 'db-awards', path: resolve(__dirname, './src/db-awards.html') },
  { name: 'db-latest-news', path: resolve(__dirname, './src/db-latest-news.html') },
  { name: 'db-story', path: resolve(__dirname, './src/db-story.html') },
  { name: 'db-locations', path: resolve(__dirname, './src/db-locations.html') },
];

export default pages;

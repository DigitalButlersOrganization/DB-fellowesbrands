import { resolve } from 'path';

const pages = [
  { name: 'main', path: resolve(__dirname, './src/index.html') },
  { name: 'overview', path: resolve(__dirname, './src/overview.html') },
  { name: 'products', path: resolve(__dirname, './src/products.html') },
  { name: 'global-vision', path: resolve(__dirname, './src/global-vision.html') },
  { name: 'giving', path: resolve(__dirname, './src/giving.html') },
  { name: 'sustainable', path: resolve(__dirname, './src/sustainable.html') },
  { name: 'awards', path: resolve(__dirname, './src/awards.html') },
  { name: 'latest-news', path: resolve(__dirname, './src/latest-news.html') },
  { name: 'story', path: resolve(__dirname, './src/story.html') },
  { name: 'locations', path: resolve(__dirname, './src/locations.html') },
];

export default pages;

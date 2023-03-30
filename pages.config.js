import { resolve } from 'path'

const pages = [
    { name: 'main', path: resolve(__dirname, './src/index.html')},
    { name: 'awards', path: resolve(__dirname, './src/awards.html')},
    { name: 'overview', path: resolve(__dirname, './src/overview.html')},
    { name: 'products', path: resolve(__dirname, './src/products.html')},
];

export default pages

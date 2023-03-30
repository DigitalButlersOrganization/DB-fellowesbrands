import { resolve } from 'path'

const pages = [
    { name: 'main', path: resolve(__dirname, './src/index.html')},
    { name: 'overview', path: resolve(__dirname, './src/overview.html')},
    { name: 'products', path: resolve(__dirname, './src/products.html')},
    { name: 'global-vision', path: resolve(__dirname, './src/global-vision.html')},
];

export default pages

import { resolve } from 'path'

const pages = [
    {name: 'main', path: resolve(__dirname, './src/index.html')},
    {name: 'overview', path: resolve(__dirname, './src/overview.html')},
];

export default pages

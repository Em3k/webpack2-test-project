const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/assets/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        //path: './dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'New Webpack 2 Web Project',
            template: './src/assets/index.ejs',
        })]
}
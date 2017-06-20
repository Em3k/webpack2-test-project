const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
    filename: 'app.css'
});



module.exports = {
    entry: './src/assets/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        //publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=[name].[ext]&outputPath=assets/img/',
                    'image-webpack-loader'
                ]

            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        //port: 9000,
        open: true
    },

    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            title: 'New Webpack 2 Web Project',
            template: './src/index.html',
            //filename: 'index.html',
            hash: true
            // minify: {
            //     collapseWhitespace: false
            // },
        }),
        new webpack.optimize.UglifyJsPlugin({
            // ...
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}
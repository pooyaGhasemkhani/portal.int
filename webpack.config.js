const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        filename: './js/main.js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'/'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name][contenthash:5].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'portal',
            description: 'your description here',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new TerserPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/constants/jsons', to: './constants/jsons' },
                { from: './src/assets', to: 'assets' },
            ],
        }),
    ],
};

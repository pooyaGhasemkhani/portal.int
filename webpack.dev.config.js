const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');
const express = require('express'); 
module.exports = (env)=> {

     return {
        entry: './src/main.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, './dist'),
            publicPath:'/'
        },
        mode: 'development',
        devServer: {
            port: 8080,
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader', 'css-loader', 'sass-loader'
                    ]
                },
                {
                    test: /\.hbs$/,
                    loader: 'handlebars-loader'
                  },
                  {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader',
                    },
                  },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'portal',
                description: 'your description here',
                template: './src/index.html'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: './src/constants/jsons', to: './constants/jsons' },
                    { from: './src/assets', to: 'assets' },
                ],
            }),
        ],
     }
};

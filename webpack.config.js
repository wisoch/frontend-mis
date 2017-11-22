const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'js/login': './src/js/login.js'
    }
    , output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    }
    , module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/
                , use: [{
                    loader: 'file-loader'
                    , options: {
                        outputPath: 'img/'
                    }
                }]
            }
            , {
                test: /\.scss$/
                , use: ExtractTextPlugin.extract({
                    fallback: 'style-loader'
                    , use: ['css-loader', 'sass-loader']
                })
            }
        ]
    }
}
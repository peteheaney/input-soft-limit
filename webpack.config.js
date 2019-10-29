const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/input-soft-limit.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'input-soft-limit.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};

module.exports = config;
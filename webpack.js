const path = require('path');
const argv = require('yargs').argv;
const chalk = require('chalk');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProd = !!argv.production;

const cb = function(err, stats) {
    if (err) {
        console.log(chalk.red(err));
    } else {
        console.log(stats.toString({
            modules: false,
            colors: true
        }));
    }
};

webpack({
    mode: isProd ? 'production' : 'development',
    output: {
        filename: data => isProd ? '[name].[chunkhash].js' : '[name].js',
        // filename: isProd ? '[name].[chunkhash].js' : '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    entry: {
        app: './src/app'
    },
    optimization: {
        runtimeChunk: 'single'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}, cb);
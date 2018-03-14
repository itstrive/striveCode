const path = require('path');
const Uglify = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCssPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        entry: './src/entry.js',
        jquery: 'jquery'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }, {
                        loader: 'postcss-loader'
                    }],
                    publicPath: '../'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath: 'images'
                    }
                }]
            }
        ]
    },
    devServer: {
        //设置要访问的基本目录
        contentBase: path.resolve(__dirname, 'src'),
        //服务器的IP地址，可以使用ip也可以使用localhost
        host: 'localhost',
        //配置服务器端口
        port: 8090,
        open: true
    },
    plugins: [
        //new Uglify(),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            hash: true,
            title: '牧码人webpack-demo',
            template: './src/index.html'
        }),
        new ExtractTextPlugin('css/index.css'),
        new PurifyCssPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new CopyWebpackPlugin([{
            from:__dirname+'/src/assets',
            to:'./public'
        }])
    ],
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "jquery",
                    chunks: "all"
                }
            }
        }
    }
};
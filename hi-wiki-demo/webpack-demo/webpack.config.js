let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

//定义一些公共路径
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'app');
let BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: APP_PATH,
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true, //https://doc.webpack-china.org/configuration/dev-server/#devserver-historyapifallback
		hot: true, //模块热替换
		inline: true, //https://doc.webpack-china.org/configuration/dev-server/#devserver-inline
		progress: true, //控制台显示打包进度百分比
		port: 5000,
		open: true, //自动打开一个新的浏览器窗口
		proxy: {
			"/": {
				target: "https://bird.ioliu.cn/",
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: APP_PATH //test 和 include 具有相同的作用，都是必须匹配选项
		}, {
			test: /\.(png|jpg)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 400
				}
			}]
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'webpack node'
		})
	]
};
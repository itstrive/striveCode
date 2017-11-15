let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

//定义一些公共路径
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'app');
let BUILD_PATH = path.resolve(ROOT_PATH, 'build');
let TMP_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index.js'),
		mobile: path.resolve(APP_PATH, 'mobile.js'),
		//添加要打包在 vendors 里面的库
		vendors: ['jquery', 'moment']
	},
	output: {
		path: BUILD_PATH,
		filename: '[name].js'
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
		}, {
			test: /\.js$/,
			loader: 'babel-loader', //需要下载 babel-core babel-loader babel-preset-env
			exclude: ['node_modules'],
			options: {
				presets: ['env']
			}
		}]
	},
	plugins: [
		//这个使用uglifyJs压缩你的js代码
		new webpack.optimize.UglifyJsPlugin({
			minimize: true
		}),
		//把入口文件里面的数组打包成 vendors.js
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors' //对应上面entry的名字
		}),

		//创建两个 HtmlWebpackPlugin实例，生成两个页面
		new HtmlWebpackPlugin({
			title: 'Hello World App',
			template: 'app/templates/index.html', //这里换成resolve绝对路径会报错，可能和版本有关系
			filename: 'index.html',
			//chunks这个参数告诉插件要引用entry里面的哪几个入口
			chunks: ['app', 'vendors'],
			//要把script插入到标签里
			inject: 'body'
		}),
		new HtmlWebpackPlugin({
			title: 'Hello Mobile App',
			template: 'app/templates/mobile.html',
			//template: path.resolve(TMP_PATH, 'mobile.html'),
			filename: 'mobile.html',
			//chunks这个参数告诉插件要引用entry里面的哪几个入口
			chunks: ['mobile', 'vendors'],
			//要把script插入到标签里
			inject: 'body'
		})
	]
};
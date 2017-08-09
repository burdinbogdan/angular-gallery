const webpack = require('webpack');

module.exports = {
	context: __dirname + '/',

	entry: __dirname + '/app/app.js',
	output: {
		path: __dirname + '/app',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: [/node_modules/, /app\\_bower_components/],
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	],
};
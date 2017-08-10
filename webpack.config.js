const webpack = require('webpack');

module.exports = function(env) {
	if (!env) {
		env = 'development';
	}
	console.log('running webpack in ' + env + ' mode');

	var config = {
		context: __dirname + '/app',

		entry: __dirname + '/app/app.js',
		output: {
			path: __dirname + '/dist',
			publicPath: '/',
			filename: 'bundle.js'
		},
		module: {
			loaders: [{
				test: /\.html$/,
				loader: 'html-loader'
			}, {
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version'
			}, {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader'
			}, {
				test: /\.js$/,
				exclude: [/node_modules/, /app\\_bower_components/],
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}]
		},

		plugins: [],

		devServer: {
			historyApiFallback: true
		},

		devtool: 'source-map'
	}

	if (env == 'production') {
		config.plugins.push(new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		}))
	}

	return config;
};
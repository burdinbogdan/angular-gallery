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

	plugins: [],

	devServer: {
		historyApiFallback: true
	},

	devtool: 'source-map'
};
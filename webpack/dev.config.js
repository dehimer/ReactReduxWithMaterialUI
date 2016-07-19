const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules!postcss-loader'
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss', 'sass?sourceMap'], //
		    }
	    ],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"',
			},
			__DEVELOPMENT__: true,
		}),
		new ExtractTextPlugin('[name].css'),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
};
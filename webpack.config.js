const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const buildPath = path.resolve('build');

module.exports = {
	entry: {
		main: path.resolve('src/main.js'),
	},
	output: {
		path: buildPath,
		filename: '[name].js'
	},
	resolve: {
		alias: {
			'src': path.resolve('src'),
		},
		extensions: ['.js', '.scss'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				use: [
					{
						loader: 'babel-loader',
					}
				]
			}
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			'React': 'react',
			'PropTypes': 'prop-types',
			'_': 'underscore',
		}),
		new CleanWebpackPlugin([buildPath]),
	],
};

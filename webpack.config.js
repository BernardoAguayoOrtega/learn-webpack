//import webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelPlugins = [
	[
		'babel-plugin-import',
		{
			libraryName: '@material-ui/core',
			// Use "'libraryDirectory': ''," if your bundler does not support ES modules
			libraryDirectory: 'esm',
			camel2DashComponentName: false,
		},
		'core',
	],
	[
		'babel-plugin-import',
		{
			libraryName: '@material-ui/icons',
			// Use "'libraryDirectory': ''," if your bundler does not support ES modules
			libraryDirectory: 'esm',
			camel2DashComponentName: false,
		},
		'icons',
	],
	['babel-plugin-styled-components'],
];

const presets = [['@babel/preset-react'], ['@babel/preset-env']];

const babelRules = {
	test: /\.js$/,
	exclude: [[/node_modules/], [/__tests__/]],
	use: {
		loader: 'babel-loader',
		options: {
			presets: presets,
			plugins: babelPlugins,
		},
	},
};

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index[contenthash].js',
	},
	module: {
		rules: [babelRules],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Learn webpack',
			template: 'public/index.html',
		}),
	],
	devServer: {
		port: 3000,
	},
};

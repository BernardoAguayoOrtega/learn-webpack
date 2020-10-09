const plugins = [
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

const babelRules = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-react'],
			plugins: plugins,
		},
	},
};

module.exports = {
	module: {
		rules: [babelRules],
	},
};

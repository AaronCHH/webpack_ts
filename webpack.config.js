//webpack.config.js
const path = require('path');

module.exports = {
  // 建置模式
  mode: 'development',
  // 入口
  entry: './src/index.ts',
  // 输出
	output: {
		filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	devServer: {
		static: './dist',
	},
	module: {
		rules: [
			// CSS
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ],
			},
			// Babel
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', '@babel/preset-react' ],
					},
				},
			},
			// TypeScript
			{
				test: /\.tsx?$/,
				exclude: [ /node_modules/ ],
				loader: 'ts-loader',
			},
		],
	},
};
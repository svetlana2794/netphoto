import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
entry: "./src/index.js",
output: {
filename: "[name].[contenthash].js",
path: path.resolve("./public")
		},
plugins: [
new MiniCssExtractPlugin({
filename: "[name].[contenthash].css"
}),
new HtmlWebpackPlugin({
template: "./src/index.html"
})
	],
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
},
{
test: /\.css$/i,
use: [
MiniCssExtractPlugin.loader,
"css-loader"
]
},
{
test: /\.sass$/i,
use: [
MiniCssExtractPlugin.loader,
"css-loader",
"sass-loader"
	]
	}
]},/*
optimization: {
runtimeChunk: "single",
splitChunks: {
chunks: "all",
maxInitialRequests: Infinity,
minSize: 0,
cacheGroups: {
vendor: {
test: /[\\/]node_modules[\\/]/,
name(module) {
const packageName=module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
return `npm.${packageName.replace('@', '')}`;
}
}
}
}
},*/
}

//webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: './webUploader/Components/WebUploader.js',	//入口文件
	output: {//输出文件
		filename: 'WebUploader.js',		//输出文件名
		path: __dirname + 'webuploader-wp'	//输出文件路径
	},
	resolve: {
        //extensions: ['', '.js', '.es6', '.vue'],
        alias: {
            //  也可以不写
            jquery: './webUpLoader/Components/jquery-3.0.0.js',  
        }
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'es2015', 'stage-3'],
					}
				}
			},
			{
				test: /\.css/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [ 'css-loader', 'sass-loader']
				})
			},
			{ test: /.(jpg|png|gif|svg)$/, use: ['url-loader?limit=8192&name=./[name].[ext]'] },
			{ test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
		]
	},
	plugins: [
	  new ExtractTextPlugin("webuploader-ddd.css"),
	]
}
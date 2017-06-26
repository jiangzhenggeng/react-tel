
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry:{
        main: __dirname +'/src/main/index.js',
        vendors:['react','react-dom','react-router','react-router-dom','redux','react-redux','redux-thunk']
    },
    output: {
        //打包相关
        path: path.resolve(__dirname,"dist"),
        filename: '[name].[hash:8].js',
        //浏览器获取资源相关
        publicPath:"dist",
    },
    resolve: {
        extensions: ['.js', '.json', '.less','.css']
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: "babel-loader?presets[]=es2015&presets[]=react",
                exclude: /^node_modules$/,
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader!less-loader"
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=8192&name=[hash:8].[name].[ext]&publicPath=../&outputPath=images/'
            },
            {
                test: /\.(mp4|ogg)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',
            filename:'vendors.[hash:8].js'
        }),
        new ExtractTextPlugin("style/[name].[hash:8].css"),
        new HtmlWebpackPlugin(),
    ]
}


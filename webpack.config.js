
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //自动打开浏览器插件

var common = require('./webpack.common');
common.devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: "./dist", //最好写上，否则报错，难道这里是一个坑？
    port: 8080,
    setup(app){  //模拟数据
        app.get('/getJSON', function(req, res) {
            res.json({ name: 'vajoy' });
        });
    }
};

common.output.publicPath = '';

common.plugins = [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080/' })
];

module.exports = common;





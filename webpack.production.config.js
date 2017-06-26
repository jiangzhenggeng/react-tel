

var webpack = require('webpack');
var common = require('./webpack.common');

common.plugins = [
    ...common.plugins,

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    // 配置环境变量到Production，防止控制台警告
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    })
];

module.exports = common;







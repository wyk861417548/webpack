const path = require('path');
const webpack = require('webpack');
let merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
let devConfig = {    

  mode:'development',       //模式配置
  devtool:'cheap-module-eval-source-map',

  devServer:{  //开发服务配置
    contentBase: path.resolve(__dirname, 'dist'), //服务器目录位置
    host: 'localhost',
    port: 3000,             // 端口
    open: true,             // 自动打开浏览器
    hot: true,               // 开启热更新
    overlay: true, // 浏览器页面上显示错误
    historyApiFallback: true
  },

  plugins:[  //插件配置new webpack.HotModuleReplacementPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],  
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }]
  }   
}

module.exports = merge.merge(devConfig,commonConfig)
let merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let prodConfig = {   
  mode:'production',       //模式配置
  devtool:'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader']
    }]
  }
}
module.exports = merge.merge(prodConfig,commonConfig)
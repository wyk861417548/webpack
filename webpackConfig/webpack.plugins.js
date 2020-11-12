// 各种插件配置页面
const HtmlWebpackPlugin = require('html-webpack-plugin');   //页面模板生成插件 html-webpack-plugin

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css分离打包 > mini-css-extract-plugin

const {CleanWebpackPlugin} = require('clean-webpack-plugin');   //删除webpack打包后的文件夹以及文件

//这里是各种插件 在webpack.config.js   plugins中配置
module.exports = [

  new HtmlWebpackPlugin({
    template: './src/index.html',   
    filename: 'index.html',
    chunks: ['index']   // 对应关系,index.js对应的是index.html
  }),
  
  new MiniCssExtractPlugin({filename: 'css/[name].css'}), // 指定打包后的css

  new CleanWebpackPlugin(),

  
]
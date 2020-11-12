const path = require('path');

const pluginsConfig = require('./webpack.plugins.js');

module.exports = {
  entry:{
    index:'./src/index.js'
  },     

  output:{     
    filename:'index.js',    //打包后的文件名称
    path:path.resolve('dist')    //打包后的目录，必须是绝对路径
  },     
 
  plugins:pluginsConfig,      //插件配置

  //处理对应模块
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },{
        test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
        use:{
          loader:'file-loader',
          options:{
            name: '[name].[ext]',
            outputPath:'font'
          }
        }
      },{
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',  // 打包后的文件名称和源文件相同
            limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片,当大于这个限定值时，会采用file-loader打包
            outputPath: 'images/'   // 图片打包后存放的目录
          }
        }],
      },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader']
      // },
    ]
  }, 
}
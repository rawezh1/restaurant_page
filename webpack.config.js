const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {mode: 'development',plugins: [
     new HtmlWebpackPlugin({
      title: 'Falafel Khana',
     }),
   ],devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watchOptions: {
  poll: true,
  ignored: /node_modules/
},
  module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },

      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
     ],
   },
};

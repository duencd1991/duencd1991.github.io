const path = require('path');
const webpack = require('webpack');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  public: path.join(__dirname, 'public'),
  imgPath: path.join(__dirname, './public/images')
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: {
    app: PATHS.src + "/index.js"
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: PATHS.public
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    port: 1234,
    historyApiFallback: true
  },
  plugins: [
    // uncomment when build production and comment when dev
    // new webpack.DefinePlugin({
    //     'process.env.NODE_ENV': JSON.stringify('production')
    //   }),
    // new webpack.optimize.UglifyJsPlugin(),
    ////////////////
    HtmlWebpackPluginConfig,
    new CopyWebpackPlugin([
      {
        from: PATHS.public,
        to: PATHS.build
      }
    ]),
    // new FaviconsWebpackPlugin({
    //   // Your source logo
    //   logo: PATHS.imgPath + '/icons/icon.png',
    //   // The prefix for all image files (might be a folder or a name)
    //   prefix: 'icons-[hash]/',
    //   // Emit all stats of the generated icons
    //   emitStats: false,
    //   // The name of the json containing all favicon information
    //   statsFilename: 'iconstats-[hash].json',
    //   // Generate a cache file with control hashes and
    //   // don't rebuild the favicons until those hashes change
    //   persistentCache: true,
    //   // Inject the html into the html-webpack-plugin
    //   inject: true,
    //   // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
    //   background: '#03a9f4',
    //   // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
    //   title: 'AsioPay',

    //   // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
    //   icons: {
    //     android: true,
    //     appleIcon: true,
    //     appleStartup: true,
    //     coast: false,
    //     favicons: true,
    //     firefox: true,
    //     opengraph: false,
    //     twitter: false,
    //     yandex: false,
    //     windows: false
    //   }
    // })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'stage-1', 'stage-2', 'stage-3']
        }
      }]
  }
}
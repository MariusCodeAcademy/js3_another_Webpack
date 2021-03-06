const path = require('path'); // node modulis dirbti su keliais iki failu
// html generavimo pluginas
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// webpack lint plugi options
const lintOptions = {
  context: path.resolve(__dirname),
  // fix: true,
};

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map', // galima matyti is kurio failo koks kodas atejo
  entry: {
    // kuri faila paims webpack kaip pagrindini
    main: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // isvalom pries tai dist buvusius failus
    assetModuleFilename: 'images/[name][ext]', // nurodom paveiksleliu talpinimo vieta
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 8080,
    // hot: true, // css reload be refresh
  },
  module: {
    rules: [
      // images
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      // css loader
      {
        test: /\.css$/i, // pritaikom .css failam
        use: ['style-loader', 'css-loader'], // uzkraunam css
      },
      // babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin(lintOptions),
    new HtmlWebpackPlugin({
      template: './src/html/template.html',
      templateParameters: {
        title: 'We now know WebPack.',
        mainTitle: 'This is easy',
      },
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
  ],
};

const path = require("path"); // node modulis dirbti su keliais iki failu
// html generavimo pluginas
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map", // galima matyti is kurio failo koks kodas atejo
  entry: {
    // kuri faila paims webpack kaip pagrindini
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // isvalom pries tai dist buvusius failus
    assetModuleFilename: "images/[name][ext]", // nurodom paveiksleliu talpinimo vieta
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 8080,
  },
  module: {
    rules: [
      // images
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      // css loader
      {
        test: /\.css$/i, // pritaikom .css failam
        use: ["style-loader", "css-loader"], // uzkraunam css
      },
      // babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["mozjpeg", { quality: 50 }],
          ["pngquant", { quality: [0.5, 0.7] }],
          ["svgo"],
        ],
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/template.html",
      templateParameters: {
        title: "We now know WebPack.",
        mainTitle: "This is easy",
      },
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
  ],
};

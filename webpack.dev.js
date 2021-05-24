const path = require("path"); // node modulis dirbti su keliais iki failu
// html generavimo pluginas
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    // kuri faila paims webpack kaip pagrindini
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {},
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: "/src/html/template.html",
    }),
  ],
};

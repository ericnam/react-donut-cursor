const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js",
  },
  devtool: "hidden-source-map",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
          },
          "css-loader",
          "less-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
          },
          "css-loader",
          "postcss-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: "text/css",
      filename: "[name].bundle.css",
      chunkFilename: '[id].bundle.css',
    }),
  ],
  // optimization: {
  //   minimizer: [new CssMinimizerPlugin()],
  // },
});

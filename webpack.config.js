// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.ts?$/,
        use: "dts-loader",
        include: path.resolve(__dirname, "src"),
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   include: path.resolve(__dirname, "src"),
      //   use: "file-loader",
      // },
      // {
      //   test: /\.otf$/,
      //   include: path.resolve(__dirname, "src/styles/assets/fonts"),
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         name: "./font/[hash].[ext]",
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.ttf$/,
      //   include: path.resolve(__dirname, "src/styles/assets/fonts"),
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         name: "./font/[hash].[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  // resolve: {
  //   extensions: [".tsx", ".ts", ".js"],
  //   plugins: [new TsconfigPathsPlugin({ baseUrl: "./src" })],
  // },
};

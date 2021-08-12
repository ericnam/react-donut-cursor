const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, "src"),
        use: "file-loader",
      },
      {
        test: /\.otf$/,
        include: path.resolve(__dirname, "src/style/assets/fonts"),
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./font/[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.ttf$/,
        include: path.resolve(__dirname, "src/style/assets/fonts"),
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./font/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({ baseUrl: "./src" })],
  },
};

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: {
    app: "./src/index.tsx",
    "service-worker": "./src/service-worker.ts",
  },
  output: {
    path: "/dist",
    filename: (pathData) => {
      if (pathData?.chunk?.name === "service-worker") {
        return "[name].js";
      }

      return "[name].[contenthash].bundle.js";
    },
    publicPath: "/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", "scss", "css"],
  },

  optimization: {
    // Solution 1:
    // runtimeChunk: "single",
    // Solution 2:
    // runtimeChunk: {
    //   name: (entrypoint) => {
    //     if (entrypoint.name.startsWith("service-worker")) {
    //       return null;
    //     }
    //     return `runtime-${entrypoint.name}`;
    //   },
    // },
    // splitChunks: {
    //   chunks(chunk) {
    //     return chunk.name !== "service-worker";
    //   },
    // },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    static: "/public",
    open: false,
    compress: false,
    hot: true,
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello World",
      template: "./src/template.html",
      filename: "index.html",
    }),
  ],
};

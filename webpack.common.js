const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|webp|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
};

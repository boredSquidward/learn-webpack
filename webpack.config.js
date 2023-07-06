const path = require("path");

module.exports = {
  mode: process.env.MODE === "prod" ? "production" : "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
};

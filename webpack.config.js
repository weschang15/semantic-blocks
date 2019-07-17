const { resolve } = require("path");
const { cwd } = process;

const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaultConfig,
  entry: {
    blocks: resolve(cwd(), "src/js", "blocks.js")
  },
  output: {
    filename: "[name].js",
    path: resolve(cwd(), "public/js/blocks")
  }
};

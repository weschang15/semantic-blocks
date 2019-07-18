const { resolve } = require("path");
const { cwd } = process;

const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  ...defaultConfig,
  entry: {
    editor: resolve(cwd(), "src/js", "editor.js"),
    public: resolve(cwd(), "src/js", "public.js")
  },
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {
                ctx: {
                  "postcss-import": {},
                  "postcss-preset-env": {
                    autoprefixer: { grid: true }
                  },
                  "postcss-utilities": {}
                }
              }
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    ...defaultConfig.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css"
    })
  ]
};

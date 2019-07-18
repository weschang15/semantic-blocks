module.exports = ({ file, options, env }) => ({
  plugins: {
    "postcss-import": options["postcss-import"]
      ? options["postcss-import"]
      : false,
    "postcss-preset-env": options["postcss-preset-env"]
      ? options["postcss-preset-env"]
      : false,
    "postcss-utilities": options["postcss-utilities"]
      ? options["postcss-utilities"]
      : false,
    cssnano: env === "production" ? options.cssnano : false
  }
});

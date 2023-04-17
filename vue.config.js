module.exports = {
  publicPath: "/",
  outputDir: "dist",
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
  },
};

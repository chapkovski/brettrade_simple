module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/brettrade_simple/" : "/",
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
};

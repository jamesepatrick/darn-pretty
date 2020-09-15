const themeDir = __dirname + "/../../";

module.exports = {
  plugins: [
    require("postcss-import")({
      path: [themeDir, themeDir + "/node_modules", themeDir + "/assets/css"],
    }),
    require("autoprefixer")({
      path: [themeDir],
    }),
  ],
};

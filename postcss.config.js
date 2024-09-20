module.exports = {
  plugins: [
    require("stylelint")({
      configFile: "./.stylelintrc.json",
    }),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("autoprefixer")({
      overrideBrowserslist: ["last 2 versions", "ie > 8"],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};

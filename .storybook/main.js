const path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "staticDirs": ['../public'],
  "rules": [
    {
      test: /\.scss$/,
      loaders: ["style-loader","css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '/assets/fonts/Recoleta/Recoleta-Black.eot': path.resolve(__dirname, "../public/assets/fonts/Recoleta/Recoleta-Black.eot"),
      '/assets/fonts/Recoleta/Recoleta-Black.woff2': path.resolve(__dirname, "../public/assets/fonts/Recoleta/Recoleta-Black.woff2"),
      '/assets/fonts/Recoleta/Recoleta-Black.woff': path.resolve(__dirname, "../public/assets/fonts/Recoleta/Recoleta-Black.woff"),
      '/assets/fonts/Recoleta/Recoleta-Black.ttf': path.resolve(__dirname, "../public/assets/fonts/Recoleta/Recoleta-Black.ttf"),
    };

    return config;
  }
}
// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // This ensures all scripts, CSS, and images use the correct base path
      webpackConfig.output.publicPath = '/velocitybroadcast-reborn/';
      return webpackConfig;
    },
  },
};

const path = require('path');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const appConfig = config;

    appConfig.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src/app/'),
    };

    return appConfig;
  },
};
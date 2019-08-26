'use strict';

module.exports = {
  mobile: true,
  crossorigin: 'anonymous',
  env: {
    test: 'aaa',
  },
  devServer(config) {
    config.overlay = {
      warnings: true,
      errors: true,
    };
    config.headers = {
      'Access-Control-Allow-Origin': '*',
      Vary: 'Origin',
      'Cache-Control': 'max-age=3600',
    };
    return config;
  },
  postcss(plugins) {
    return plugins;
  },
};

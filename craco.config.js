const CracoLessPlugin = require('craco-less');

module.exports = {
  modules: {
    localIdentName: ''
  },
  css: {
    loaderOptions: (cssLoaderOptions, { env, paths }) => {
      return cssLoaderOptions;
    }
  },
  sass: {
    loaderOptions: (sassLoaderOptions, { env, paths }) => {
      return sassLoaderOptions;
    }
  },
  eslint: {
    enable: true /* (default value) */,
    mode: 'extends' /* (default value) */ || 'file',
    configure: (eslintConfig, { env, paths }) => {
      return eslintConfig;
    },
    pluginOptions: (eslintPluginOptions, { env, paths }) => {
      return eslintPluginOptions;
    }
  },
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    }
  },
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
  webpack: {
    alias: {},
    plugins: {
      add: [],
      remove: []
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    }
  },
  jest: {
    babel: {
      addPresets: true /* (default value) */,
      addPlugins: true /* (default value) */
    },
    configure: (jestConfig, { env, paths, resolve, rootDir }) => {
      return jestConfig;
    }
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    return devServerConfig;
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#845f3f' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};

module.exports = {
  settings: {
    runtime: {
      applicationName: 'My Roc Application',
      port: 3000,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      reducers: 'src/redux/reducers.js',
      routes: 'src/routes/index.js',
    },
  },
  action: () => (rocObject) => {
    const hook = rocObject.hook;
    const rocBuilder = rocObject.previousValue;
    if (hook === 'build-webpack') {
      return () => () => {
        rocBuilder.buildConfig.resolve.extensions = ['', '.js', '.json'];
        rocBuilder.buildConfig.externals = {
          jsdom: 'window',
          cheerio: 'window',
          'react/addons': true,
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': true,
        };
        return rocBuilder;
      };
    }
    return null;
  },
};

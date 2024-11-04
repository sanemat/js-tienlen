module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: [],
        files: [
            'public/js/*.js',
            'test/*.test.js',
            'test/adapter.js'
        ],
        exclude: [],
        browsers: ['ChromeHeadless'],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity
    });
};

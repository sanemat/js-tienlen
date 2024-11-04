// web-test-runner.config.js
export default {
    files: 'test/**/*.test.js', // Specifies the test files
    nodeResolve: true,          // Allows resolving bare module imports
    browsers: [
        'chrome',                 // Runs tests in Chrome browser
    ],
    testFramework: {
        config: {
            timeout: 5000,          // Sets test timeout to 5 seconds
        },
    },
};

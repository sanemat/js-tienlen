import { chromeLauncher } from '@web/test-runner-chrome';

export default {
    files: 'test/**/*.test.js', // Specifies the test files
    nodeResolve: true,          // Allows resolving bare module imports
    browsers: [
        chromeLauncher(),         // Use Chrome launcher
    ],
    testFramework: {
        config: {
            timeout: 5000,          // Sets test timeout to 5 seconds
        },
    },
};

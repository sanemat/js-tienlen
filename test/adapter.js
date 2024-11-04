// test/adapter.js
window.__karma__.start = function () {
    try {
        console.log("Starting custom tests...");

        // require and run tests
        // require('./moduleA.test.js');

        window.__karma__.complete({ success: true });
    } catch (error) {
        console.error("✘ Test failed:", error);
        window.__karma__.complete({ success: false });
    }
};

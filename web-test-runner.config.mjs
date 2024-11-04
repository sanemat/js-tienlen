import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: 'test/**/*.test.js',
  nodeResolve: true,
  browsers: [
    playwrightLauncher({ product: 'chromium', headless: true }) // Chromiumを使い、ヘッドレスモードで実行
  ],
  testFramework: {
    config: {
      timeout: 5000,
    },
  },
};

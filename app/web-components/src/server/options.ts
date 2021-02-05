import { sync } from 'read-pkg-up';
import { LoadOptions } from '@storybook/core-common';

export default {
  packageJson: sync({ cwd: __dirname }).packageJson,
  framework: 'web-components',
  frameworkPresets: [require.resolve('./framework-preset-web-components.js')],
} as LoadOptions;

import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Storybookのオプションを定義する。
setOptions({
  // 最初にknobsを開くように指定。
  selectedAddonPanel: 'knobs',
});

configure(loadStories, module);

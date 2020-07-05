import { configure } from '@storybook/react';

import '../src/scss/style.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

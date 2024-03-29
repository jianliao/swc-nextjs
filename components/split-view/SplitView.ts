import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { SplitView } from '@spectrum-web-components/split-view';

import '@spectrum-web-components/split-view/sp-split-view.js';

export const SpSplitView = createComponent({
  react: React,
  tagName: 'sp-split-view',
  elementClass: SplitView,
  events: {},
  displayName: 'SpSplitView',
});

import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ActionBar } from '@spectrum-web-components/action-bar';

import '@spectrum-web-components/action-bar/sp-action-bar.js';

export const SpActionBar = createComponent({
  react: React,
  tagName: 'sp-action-bar',
  elementClass: ActionBar,
  events: {},
  displayName: 'SpActionBar',
});

import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Divider } from '@spectrum-web-components/divider';

import '@spectrum-web-components/divider/sp-divider.js';

export const SpDivider = createComponent({
  react: React,
  tagName: 'sp-divider',
  elementClass: Divider,
  events: {},
  displayName: 'SpDivider',
});

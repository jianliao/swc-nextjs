import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ColorHandle } from '@spectrum-web-components/color-handle';

import '@spectrum-web-components/color-handle/sp-color-handle.js';

export const SpColorHandle = createComponent({
  react: React,
  tagName: 'sp-color-handle',
  elementClass: ColorHandle,
  events: {},
  displayName: 'SpColorHandle',
});

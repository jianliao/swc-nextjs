import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ColorLoupe } from '@spectrum-web-components/color-loupe';

import '@spectrum-web-components/color-loupe/sp-color-loupe.js';

export const SpColorLoupe = createComponent({
  react: React,
  tagName: 'sp-color-loupe',
  elementClass: ColorLoupe,
  events: {},
  displayName: 'SpColorLoupe',
});

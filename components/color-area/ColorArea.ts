import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ColorArea } from '@spectrum-web-components/color-area';

import '@spectrum-web-components/color-area/sp-color-area.js';

export const SpColorArea = createComponent({
  react: React,
  tagName: 'sp-color-area',
  elementClass: ColorArea,
  events: { focus: 'focus', input: 'input', change: 'change' },
  displayName: 'SpColorArea',
});

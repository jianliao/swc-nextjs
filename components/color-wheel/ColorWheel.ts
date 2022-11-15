import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ColorWheel } from '@spectrum-web-components/color-wheel';

import '@spectrum-web-components/color-wheel/sp-color-wheel.js';

export const SpColorWheel = createComponent({
  react: React,
  tagName: 'sp-color-wheel',
  elementClass: ColorWheel,
  events: { focus: 'focus', input: 'input', change: 'change' },
  displayName: 'SpColorWheel',
});

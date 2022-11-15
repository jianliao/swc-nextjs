import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ColorSlider } from '@spectrum-web-components/color-slider';

import '@spectrum-web-components/color-slider/sp-color-slider.js';

export const SpColorSlider = createComponent({
  react: React,
  tagName: 'sp-color-slider',
  elementClass: ColorSlider,
  events: { focus: 'focus', input: 'input', change: 'change' },
  displayName: 'SpColorSlider',
});

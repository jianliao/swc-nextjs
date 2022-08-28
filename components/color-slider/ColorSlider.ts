import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ColorSlider } from '@spectrum-web-components/color-slider';

import '@spectrum-web-components/color-slider/sp-color-slider.js';

export const SpColorSlider = createComponent(
  React,
  'sp-color-slider',
  ColorSlider,
  { focus: 'focus', input: 'input', change: 'change' },
  'SpColorSlider'
);

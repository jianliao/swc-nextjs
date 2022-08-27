import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ColorArea } from '@spectrum-web-components/color-area';

import '@spectrum-web-components/color-area/sp-color-area.js';

export const SpColorArea = createComponent(
  React,
  'sp-color-area',
  ColorArea,
  { input: 'input', change: 'change' },
  'SpColorArea'
);

import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Swatch } from '@spectrum-web-components/swatch';
import { SwatchGroup } from '@spectrum-web-components/swatch';

import '@spectrum-web-components/swatch/sp-swatch-group.js';
import '@spectrum-web-components/swatch/sp-swatch.js';

export const SpSwatch = createComponent(
  React,
  'sp-swatch',
  Swatch,
  { toggle: 'toggle', change: 'change' },
  'SpSwatch'
);
export const SpSwatchGroup = createComponent(
  React,
  'sp-swatch-group',
  SwatchGroup,
  { focus: 'focus', change: 'change' },
  'SpSwatchGroup'
);

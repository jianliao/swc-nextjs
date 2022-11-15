import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Swatch } from '@spectrum-web-components/swatch';
import { SwatchGroup } from '@spectrum-web-components/swatch';

import '@spectrum-web-components/swatch/sp-swatch-group.js';
import '@spectrum-web-components/swatch/sp-swatch.js';

export const SpSwatch = createComponent({
  react: React,
  tagName: 'sp-swatch',
  elementClass: Swatch,
  events: { toggle: 'toggle', change: 'change' },
  displayName: 'SpSwatch',
});
export const SpSwatchGroup = createComponent({
  react: React,
  tagName: 'sp-swatch-group',
  elementClass: SwatchGroup,
  events: { focus: 'focus', change: 'change' },
  displayName: 'SpSwatchGroup',
});

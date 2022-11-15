import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { IconsLarge } from '@spectrum-web-components/icons';
import { IconsMedium } from '@spectrum-web-components/icons';

import '@spectrum-web-components/icons/sp-icons-large.js';
import '@spectrum-web-components/icons/sp-icons-medium.js';

export const SpIconsLarge = createComponent({
  react: React,
  tagName: 'sp-icons-large',
  elementClass: IconsLarge,
  events: {},
  displayName: 'SpIconsLarge',
});
export const SpIconsMedium = createComponent({
  react: React,
  tagName: 'sp-icons-medium',
  elementClass: IconsMedium,
  events: {},
  displayName: 'SpIconsMedium',
});

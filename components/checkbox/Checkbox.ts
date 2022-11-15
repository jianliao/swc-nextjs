import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Checkbox } from '@spectrum-web-components/checkbox';

import '@spectrum-web-components/checkbox/sp-checkbox.js';

export const SpCheckbox = createComponent({
  react: React,
  tagName: 'sp-checkbox',
  elementClass: Checkbox,
  events: { handleChange: 'handleChange' },
  displayName: 'SpCheckbox',
});

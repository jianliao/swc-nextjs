import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { FieldLabel } from '@spectrum-web-components/field-label';

import '@spectrum-web-components/field-label/sp-field-label.js';

export const SpFieldLabel = createComponent({
  react: React,
  tagName: 'sp-field-label',
  elementClass: FieldLabel,
  events: {},
  displayName: 'SpFieldLabel',
});

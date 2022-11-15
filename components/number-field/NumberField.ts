import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { NumberField } from '@spectrum-web-components/number-field';

import '@spectrum-web-components/number-field/sp-number-field.js';

export const SpNumberField = createComponent({
  react: React,
  tagName: 'sp-number-field',
  elementClass: NumberField,
  events: {
    change: 'change',
    input: 'input',
    setSelectionRange: 'setSelectionRange',
    select: 'select',
    checkValidity: 'checkValidity',
  },
  displayName: 'SpNumberField',
});

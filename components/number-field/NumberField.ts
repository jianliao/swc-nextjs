import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { NumberField } from '@spectrum-web-components/number-field';

import '@spectrum-web-components/number-field/sp-number-field.js';

export const SpNumberField = createComponent(
  React,
  'sp-number-field',
  NumberField,
  {
    change: 'change',
    input: 'input',
    setSelectionRange: 'setSelectionRange',
    select: 'select',
    checkValidity: 'checkValidity',
  },
  'SpNumberField'
);

import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Textfield } from '@spectrum-web-components/textfield';

import '@spectrum-web-components/textfield/sp-textfield.js';

export const SpTextfield = createComponent({
  react: React,
  tagName: 'sp-textfield',
  elementClass: Textfield,
  events: {
    setSelectionRange: 'setSelectionRange',
    select: 'select',
    checkValidity: 'checkValidity',
    change: 'change',
    input: 'input',
  },
  displayName: 'SpTextfield',
});

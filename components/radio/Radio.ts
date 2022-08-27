import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Radio } from '@spectrum-web-components/radio';
import { RadioGroup } from '@spectrum-web-components/radio';

import '@spectrum-web-components/radio/sp-radio-group.js';
import '@spectrum-web-components/radio/sp-radio.js';

export const SpRadio = createComponent(
  React,
  'sp-radio',
  Radio,
  { keydown: 'keydown', change: 'change' },
  'SpRadio'
);
export const SpRadioGroup = createComponent(
  React,
  'sp-radio-group',
  RadioGroup,
  { change: 'change' },
  'SpRadioGroup'
);

import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Radio } from '@spectrum-web-components/radio';
import { RadioGroup } from '@spectrum-web-components/radio';

import '@spectrum-web-components/radio/sp-radio-group.js';
import '@spectrum-web-components/radio/sp-radio.js';

export const SpRadio = createComponent({
  react: React,
  tagName: 'sp-radio',
  elementClass: Radio,
  events: { click: 'click', keydown: 'keydown', change: 'change' },
  displayName: 'SpRadio',
});
export const SpRadioGroup = createComponent({
  react: React,
  tagName: 'sp-radio-group',
  elementClass: RadioGroup,
  events: { focus: 'focus', change: 'change' },
  displayName: 'SpRadioGroup',
});

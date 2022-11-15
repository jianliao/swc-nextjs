import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Meter } from '@spectrum-web-components/meter';

import '@spectrum-web-components/meter/sp-meter.js';

export const SpMeter = createComponent({
  react: React,
  tagName: 'sp-meter',
  elementClass: Meter,
  events: {},
  displayName: 'SpMeter',
});

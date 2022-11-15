import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Switch } from '@spectrum-web-components/switch';

import '@spectrum-web-components/switch/sp-switch.js';

export const SpSwitch = createComponent({
  react: React,
  tagName: 'sp-switch',
  elementClass: Switch,
  events: {},
  displayName: 'SpSwitch',
});

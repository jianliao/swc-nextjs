import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { StatusLight } from '@spectrum-web-components/status-light';

import '@spectrum-web-components/status-light/sp-status-light.js';

export const SpStatusLight = createComponent({
  react: React,
  tagName: 'sp-status-light',
  elementClass: StatusLight,
  events: {},
  displayName: 'SpStatusLight',
});

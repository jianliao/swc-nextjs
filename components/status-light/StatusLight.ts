import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { StatusLight } from '@spectrum-web-components/status-light';

import '@spectrum-web-components/status-light/sp-status-light.js';

export const SpStatusLight = createComponent(
  React,
  'sp-status-light',
  StatusLight,
  {},
  'SpStatusLight'
);

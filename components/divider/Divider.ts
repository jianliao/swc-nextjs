import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Divider } from '@spectrum-web-components/divider';

import '@spectrum-web-components/divider/sp-divider.js';

export const SpDivider = createComponent(
  React,
  'sp-divider',
  Divider,
  {},
  'SpDivider'
);

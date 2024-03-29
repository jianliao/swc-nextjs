import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ProgressCircle } from '@spectrum-web-components/progress-circle';

import '@spectrum-web-components/progress-circle/sp-progress-circle.js';

export const SpProgressCircle = createComponent({
  react: React,
  tagName: 'sp-progress-circle',
  elementClass: ProgressCircle,
  events: {},
  displayName: 'SpProgressCircle',
});

import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Coachmark } from '@spectrum-web-components/coachmark';

import '@spectrum-web-components/coachmark/sp-coachmark.js';

export const SpCoachmark = createComponent({
  react: React,
  tagName: 'sp-coachmark',
  elementClass: Coachmark,
  events: {},
  displayName: 'SpCoachmark',
});

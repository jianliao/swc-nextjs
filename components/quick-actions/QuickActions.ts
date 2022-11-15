import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { QuickActions } from '@spectrum-web-components/quick-actions';

import '@spectrum-web-components/quick-actions/sp-quick-actions.js';

export const SpQuickActions = createComponent({
  react: React,
  tagName: 'sp-quick-actions',
  elementClass: QuickActions,
  events: {},
  displayName: 'SpQuickActions',
});

import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ActionGroup } from '@spectrum-web-components/action-group';

import '@spectrum-web-components/action-group/sp-action-group.js';

export const SpActionGroup = createComponent({
  react: React,
  tagName: 'sp-action-group',
  elementClass: ActionGroup,
  events: { focus: 'focus', change: 'change' },
  displayName: 'SpActionGroup',
});

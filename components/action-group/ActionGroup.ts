import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ActionGroup } from '@spectrum-web-components/action-group';

import '@spectrum-web-components/action-group/sp-action-group.js';

export const SpActionGroup = createComponent(
  React,
  'sp-action-group',
  ActionGroup,
  { focus: 'focus', change: 'change' },
  'SpActionGroup'
);

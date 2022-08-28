import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ActionMenu } from '@spectrum-web-components/action-menu';

import '@spectrum-web-components/action-menu/sp-action-menu.js';

export const SpActionMenu = createComponent(
  React,
  'sp-action-menu',
  ActionMenu,
  { change: 'change', spOpened: 'sp-opened', spClosed: 'sp-closed' },
  'SpActionMenu'
);

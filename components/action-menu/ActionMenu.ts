import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { ActionMenu } from '@spectrum-web-components/action-menu';

import '@spectrum-web-components/action-menu/sp-action-menu.js';

export const SpActionMenu = createComponent(
  React,
  'sp-action-menu',
  ActionMenu,
  {
    forceFocusVisible: 'forceFocusVisible',
    onButtonBlur: 'onButtonBlur',
    focus: 'focus',
    onHelperFocus: 'onHelperFocus',
    onButtonFocus: 'onButtonFocus',
    handleChange: 'handleChange',
    setValueFromItem: 'setValueFromItem',
    toggle: 'toggle',
    close: 'close',
    change: 'change',
    spOpened: 'sp-opened',
    spClosed: 'sp-closed',
  },
  'SpActionMenu'
);

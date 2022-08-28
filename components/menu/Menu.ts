import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Menu } from '@spectrum-web-components/menu';
import { MenuDivider } from '@spectrum-web-components/menu';
import { MenuGroup } from '@spectrum-web-components/menu';
import { MenuItem } from '@spectrum-web-components/menu';

import '@spectrum-web-components/menu/sp-menu-divider.js';
import '@spectrum-web-components/menu/sp-menu-group.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu.js';

export const SpMenu = createComponent(
  React,
  'sp-menu',
  Menu,
  {
    focus: 'focus',
    handleFocusin: 'handleFocusin',
    startListeningToKeyboard: 'startListeningToKeyboard',
    handleFocusout: 'handleFocusout',
    stopListeningToKeyboard: 'stopListeningToKeyboard',
    selectOrToggleItem: 'selectOrToggleItem',
    handleKeydown: 'handleKeydown',
    focusMenuItemByOffset: 'focusMenuItemByOffset',
    updateSelectedItemIndex: 'updateSelectedItemIndex',
    change: 'change',
    close: 'close',
  },
  'SpMenu'
);
export const SpMenuDivider = createComponent(
  React,
  'sp-menu-divider',
  MenuDivider,
  {},
  'SpMenuDivider'
);
export const SpMenuGroup = createComponent(
  React,
  'sp-menu-group',
  MenuGroup,
  {
    focus: 'focus',
    handleFocusin: 'handleFocusin',
    startListeningToKeyboard: 'startListeningToKeyboard',
    handleFocusout: 'handleFocusout',
    stopListeningToKeyboard: 'stopListeningToKeyboard',
    selectOrToggleItem: 'selectOrToggleItem',
    handleKeydown: 'handleKeydown',
    focusMenuItemByOffset: 'focusMenuItemByOffset',
    updateSelectedItemIndex: 'updateSelectedItemIndex',
    change: 'change',
    close: 'close',
  },
  'SpMenuGroup'
);
export const SpMenuItem = createComponent(
  React,
  'sp-menu-item',
  MenuItem,
  {
    click: 'click',
    openOverlay: 'openOverlay',
    setRole: 'setRole',
    triggerUpdate: 'triggerUpdate',
    spMenuItemAdded: 'sp-menu-item-added',
    spMenuItemRemoved: 'sp-menu-item-removed',
  },
  'SpMenuItem'
);

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

export const SpMenu = createComponent({
  react: React,
  tagName: 'sp-menu',
  elementClass: Menu,
  events: {
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
  displayName: 'SpMenu',
});
export const SpMenuDivider = createComponent({
  react: React,
  tagName: 'sp-menu-divider',
  elementClass: MenuDivider,
  events: {},
  displayName: 'SpMenuDivider',
});
export const SpMenuGroup = createComponent({
  react: React,
  tagName: 'sp-menu-group',
  elementClass: MenuGroup,
  events: {
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
  displayName: 'SpMenuGroup',
});
export const SpMenuItem = createComponent({
  react: React,
  tagName: 'sp-menu-item',
  elementClass: MenuItem,
  events: {
    click: 'click',
    openOverlay: 'openOverlay',
    setRole: 'setRole',
    triggerUpdate: 'triggerUpdate',
    spMenuItemAdded: 'sp-menu-item-added',
    spMenuItemRemoved: 'sp-menu-item-removed',
  },
  displayName: 'SpMenuItem',
});

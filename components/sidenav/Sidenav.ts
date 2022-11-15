import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { SideNav } from '@spectrum-web-components/sidenav';
import { SideNavHeading } from '@spectrum-web-components/sidenav';
import { SideNavItem } from '@spectrum-web-components/sidenav';

import '@spectrum-web-components/sidenav/sp-sidenav-heading.js';
import '@spectrum-web-components/sidenav/sp-sidenav-item.js';
import '@spectrum-web-components/sidenav/sp-sidenav.js';

export const SpSideNav = createComponent({
  react: React,
  tagName: 'sp-sidenav',
  elementClass: SideNav,
  events: {
    startTrackingSelectionForItem: 'startTrackingSelectionForItem',
    stopTrackingSelectionForItem: 'stopTrackingSelectionForItem',
    focus: 'focus',
    blur: 'blur',
    click: 'click',
    change: 'change',
  },
  displayName: 'SpSideNav',
});
export const SpSideNavHeading = createComponent({
  react: React,
  tagName: 'sp-sidenav-heading',
  elementClass: SideNavHeading,
  events: {},
  displayName: 'SpSideNavHeading',
});
export const SpSideNavItem = createComponent({
  react: React,
  tagName: 'sp-sidenav-item',
  elementClass: SideNavItem,
  events: { handleSideNavSelect: 'handleSideNavSelect', click: 'click' },
  displayName: 'SpSideNavItem',
});

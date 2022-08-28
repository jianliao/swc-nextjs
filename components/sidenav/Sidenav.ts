import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { SideNav } from '@spectrum-web-components/sidenav';
import { SideNavHeading } from '@spectrum-web-components/sidenav';
import { SideNavItem } from '@spectrum-web-components/sidenav';

import '@spectrum-web-components/sidenav/sp-sidenav-heading.js';
import '@spectrum-web-components/sidenav/sp-sidenav-item.js';
import '@spectrum-web-components/sidenav/sp-sidenav.js';

export const SpSideNav = createComponent(
  React,
  'sp-sidenav',
  SideNav,
  {
    startTrackingSelectionForItem: 'startTrackingSelectionForItem',
    stopTrackingSelectionForItem: 'stopTrackingSelectionForItem',
    focus: 'focus',
    blur: 'blur',
    click: 'click',
    change: 'change',
  },
  'SpSideNav'
);
export const SpSideNavHeading = createComponent(
  React,
  'sp-sidenav-heading',
  SideNavHeading,
  {},
  'SpSideNavHeading'
);
export const SpSideNavItem = createComponent(
  React,
  'sp-sidenav-item',
  SideNavItem,
  { handleSideNavSelect: 'handleSideNavSelect', click: 'click' },
  'SpSideNavItem'
);

import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { TopNav } from '@spectrum-web-components/top-nav';
import { TopNavItem } from '@spectrum-web-components/top-nav';

import '@spectrum-web-components/top-nav/sp-top-nav-item.js';
import '@spectrum-web-components/top-nav/sp-top-nav.js';

export const SpTopNav = createComponent(React, 'sp-top-nav', TopNav, {}, 'SpTopNav');
export const SpTopNavItem = createComponent(
  React,
  'sp-top-nav-item',
  TopNavItem,
  { spTopNavItemContentchange: 'sp-top-nav-item-contentchange' },
  'SpTopNavItem'
);

import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { TopNav } from '@spectrum-web-components/top-nav';
import { TopNavItem } from '@spectrum-web-components/top-nav';

import '@spectrum-web-components/top-nav/sp-top-nav-item.js';
import '@spectrum-web-components/top-nav/sp-top-nav.js';

export const SpTopNav = createComponent({
  react: React,
  tagName: 'sp-top-nav',
  elementClass: TopNav,
  events: {},
  displayName: 'SpTopNav',
});
export const SpTopNavItem = createComponent({
  react: React,
  tagName: 'sp-top-nav-item',
  elementClass: TopNavItem,
  events: { click: 'click', spTopNavItemContentchange: 'sp-top-nav-item-contentchange' },
  displayName: 'SpTopNavItem',
});

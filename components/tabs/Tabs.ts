import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Tab } from '@spectrum-web-components/tabs';
import { TabPanel } from '@spectrum-web-components/tabs';
import { Tabs } from '@spectrum-web-components/tabs';

import '@spectrum-web-components/tabs/sp-tab-panel.js';
import '@spectrum-web-components/tabs/sp-tab.js';
import '@spectrum-web-components/tabs/sp-tabs.js';

export const SpTab = createComponent({
  react: React,
  tagName: 'sp-tab',
  elementClass: Tab,
  events: { spTabContentchange: 'sp-tab-contentchange' },
  displayName: 'SpTab',
});
export const SpTabPanel = createComponent({
  react: React,
  tagName: 'sp-tab-panel',
  elementClass: TabPanel,
  events: {},
  displayName: 'SpTabPanel',
});
export const SpTabs = createComponent({
  react: React,
  tagName: 'sp-tabs',
  elementClass: Tabs,
  events: { change: 'change' },
  displayName: 'SpTabs',
});

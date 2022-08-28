import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Tab } from '@spectrum-web-components/tabs';
import { TabPanel } from '@spectrum-web-components/tabs';
import { Tabs } from '@spectrum-web-components/tabs';

import '@spectrum-web-components/tabs/sp-tab-panel.js';
import '@spectrum-web-components/tabs/sp-tab.js';
import '@spectrum-web-components/tabs/sp-tabs.js';

export const SpTab = createComponent(
  React,
  'sp-tab',
  Tab,
  { spTabContentchange: 'sp-tab-contentchange' },
  'SpTab'
);
export const SpTabPanel = createComponent(React, 'sp-tab-panel', TabPanel, {}, 'SpTabPanel');
export const SpTabs = createComponent(React, 'sp-tabs', Tabs, { change: 'change' }, 'SpTabs');

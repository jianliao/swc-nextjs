import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Tab } from '@spectrum-web-components/tabs';
import { TabPanel } from '@spectrum-web-components/tabs';
import { Tabs } from '@spectrum-web-components/tabs';

const ssr = false;

export const SpTab = dynamic<
  Partial<Tab> | { children?: ReactNode } | { spTabContentchange: Function }
>(() => import('./Tabs').then((m) => m.SpTab as any), { ssr });
export const SpTabPanel = dynamic<Partial<TabPanel> | { children?: ReactNode }>(
  () => import('./Tabs').then((m) => m.SpTabPanel as any),
  { ssr }
);
export const SpTabs = dynamic<Partial<Tabs> | { children?: ReactNode } | { change: Function }>(
  () => import('./Tabs').then((m) => m.SpTabs as any),
  { ssr }
);

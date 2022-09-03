import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { TopNav } from '@spectrum-web-components/top-nav';
import { TopNavItem } from '@spectrum-web-components/top-nav';

const ssr = false;

export const SpTopNav = dynamic<Partial<TopNav> | { children?: ReactNode }>(
  () => import('./TopNav').then((m) => m.SpTopNav as any),
  { ssr }
);
export const SpTopNavItem = dynamic<
  | Partial<TopNavItem>
  | { children?: ReactNode }
  | { click: Function }
  | { spTopNavItemContentchange: Function }
>(() => import('./TopNav').then((m) => m.SpTopNavItem as any), { ssr });

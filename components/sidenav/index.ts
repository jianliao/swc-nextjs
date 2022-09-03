import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { SideNav } from '@spectrum-web-components/sidenav';
import { SideNavHeading } from '@spectrum-web-components/sidenav';
import { SideNavItem } from '@spectrum-web-components/sidenav';

const ssr = false;

export const SpSideNav = dynamic<
  | Partial<SideNav>
  | { children?: ReactNode }
  | { startTrackingSelectionForItem: Function }
  | { stopTrackingSelectionForItem: Function }
  | { focus: Function }
  | { blur: Function }
  | { click: Function }
  | { change: Function }
>(() => import('./Sidenav').then((m) => m.SpSideNav as any), { ssr });
export const SpSideNavHeading = dynamic<Partial<SideNavHeading> | { children?: ReactNode }>(
  () => import('./Sidenav').then((m) => m.SpSideNavHeading as any),
  { ssr }
);
export const SpSideNavItem = dynamic<
  | Partial<SideNavItem>
  | { children?: ReactNode }
  | { handleSideNavSelect: Function }
  | { click: Function }
>(() => import('./Sidenav').then((m) => m.SpSideNavItem as any), { ssr });

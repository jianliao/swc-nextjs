import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { SideNav } from '@spectrum-web-components/sidenav';
import { SideNavHeading } from '@spectrum-web-components/sidenav';
import { SideNavItem } from '@spectrum-web-components/sidenav';

const ssr = false;

export const SpSideNav = dynamic<SideNav | { children?: ReactNode }>(() => import('./Sidenav').then(m => m.SpSideNav as any), { ssr });
export const SpSideNavHeading = dynamic<SideNavHeading | { children?: ReactNode }>(() => import('./Sidenav').then(m => m.SpSideNavHeading as any), { ssr });
export const SpSideNavItem = dynamic<SideNavItem | { children?: ReactNode }>(() => import('./Sidenav').then(m => m.SpSideNavItem as any), { ssr });

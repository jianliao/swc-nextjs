import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Menu } from '@spectrum-web-components/menu';
import { MenuDivider } from '@spectrum-web-components/menu';
import { MenuGroup } from '@spectrum-web-components/menu';
import { MenuItem } from '@spectrum-web-components/menu';

const ssr = false;

export const SpMenu = dynamic<Menu | { children?: ReactNode }>(() => import('./Menu').then(m => m.SpMenu as any), { ssr });
export const SpMenuDivider = dynamic<MenuDivider | { children?: ReactNode }>(() => import('./Menu').then(m => m.SpMenuDivider as any), { ssr });
export const SpMenuGroup = dynamic<MenuGroup | { children?: ReactNode }>(() => import('./Menu').then(m => m.SpMenuGroup as any), { ssr });
export const SpMenuItem = dynamic<MenuItem | { children?: ReactNode }>(() => import('./Menu').then(m => m.SpMenuItem as any), { ssr });


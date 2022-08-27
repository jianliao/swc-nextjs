import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { IconsLarge } from '@spectrum-web-components/icons';
import { IconsMedium } from '@spectrum-web-components/icons';

const ssr = false;

export const SpIconsLarge = dynamic<IconsLarge | { children?: ReactNode }>(() => import('./Icons').then(m => m.SpIconsLarge as any), { ssr });
export const SpIconsMedium = dynamic<IconsMedium | { children?: ReactNode }>(() => import('./Icons').then(m => m.SpIconsMedium as any), { ssr });

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ActionBar } from '@spectrum-web-components/action-bar';

const ssr = false;

export const SpActionBar = dynamic<ActionBar | { children?: ReactNode }>(() => import('./ActionBar').then(m => m.SpActionBar as any), { ssr });

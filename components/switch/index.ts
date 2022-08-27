import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Switch } from '@spectrum-web-components/switch';

const ssr = false;

export const SpSwitch = dynamic<Switch | { children?: ReactNode }>(() => import('./Switch').then(m => m.SpSwitch as any), { ssr });


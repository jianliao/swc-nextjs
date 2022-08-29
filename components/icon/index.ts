import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Icon } from '@spectrum-web-components/icon';

const ssr = false;

export const SpIcon = dynamic<Icon | { children?: ReactNode } >(() => import('./Icon').then(m => m.SpIcon as any), { ssr });

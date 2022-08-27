import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Checkbox } from '@spectrum-web-components/checkbox';

const ssr = false;

export const SpCheckbox = dynamic<Checkbox | { children?: ReactNode }>(() => import('./Checkbox').then(m => m.SpCheckbox as any), { ssr });


import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Picker } from '@spectrum-web-components/picker';

const ssr = false;

export const SpPicker = dynamic<Picker | { children?: ReactNode }>(() => import('./Picker').then(m => m.SpPicker as any), { ssr });


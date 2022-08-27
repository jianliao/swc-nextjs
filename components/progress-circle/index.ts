import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ProgressCircle } from '@spectrum-web-components/progress-circle';

const ssr = false;

export const SpProgressCircle = dynamic<ProgressCircle | { children?: ReactNode }>(() => import('./ProgressCircle').then(m => m.SpProgressCircle as any), { ssr });


import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ProgressBar } from '@spectrum-web-components/progress-bar';

const ssr = false;

export const SpProgressBar = dynamic<ProgressBar | { children?: ReactNode }>(() => import('./ProgressBar').then(m => m.SpProgressBar as any), { ssr });


import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ColorArea } from '@spectrum-web-components/color-area';

const ssr = false;

export const SpColorArea = dynamic<ColorArea | { children?: ReactNode }>(() => import('./ColorArea').then(m => m.SpColorArea as any), { ssr });


import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ColorWheel } from '@spectrum-web-components/color-wheel';

const ssr = false;

export const SpColorWheel = dynamic<ColorWheel | { children?: ReactNode }>(() => import('./ColorWheel').then(m => m.SpColorWheel as any), { ssr });


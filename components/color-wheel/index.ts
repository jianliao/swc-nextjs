import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ColorWheel } from '@spectrum-web-components/color-wheel';

const ssr = false;

export const SpColorWheel = dynamic<
  | ColorWheel
  | { children?: ReactNode }
  | { focus: Function }
  | { input: Function }
  | { change: Function }
>(() => import('./ColorWheel').then((m) => m.SpColorWheel as any), { ssr });

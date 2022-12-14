import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ColorArea } from '@spectrum-web-components/color-area';

const ssr = false;

export const SpColorArea = dynamic<
  | Partial<ColorArea>
  | { children?: ReactNode }
  | { focus: Function }
  | { input: Function }
  | { change: Function }
>(() => import('./ColorArea').then((m) => m.SpColorArea as any), { ssr });

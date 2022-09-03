import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ColorSlider } from '@spectrum-web-components/color-slider';

const ssr = false;

export const SpColorSlider = dynamic<
  | Partial<ColorSlider>
  | { children?: ReactNode }
  | { focus: Function }
  | { input: Function }
  | { change: Function }
>(() => import('./ColorSlider').then((m) => m.SpColorSlider as any), { ssr });

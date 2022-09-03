import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ColorLoupe } from '@spectrum-web-components/color-loupe';

const ssr = false;

export const SpColorLoupe = dynamic<Partial<ColorLoupe> | { children?: ReactNode }>(
  () => import('./ColorLoupe').then((m) => m.SpColorLoupe as any),
  { ssr }
);

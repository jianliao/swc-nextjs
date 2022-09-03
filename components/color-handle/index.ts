import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { ColorHandle } from '@spectrum-web-components/color-handle';

const ssr = false;

export const SpColorHandle = dynamic<Partial<ColorHandle> | { children?: ReactNode }>(
  () => import('./ColorHandle').then((m) => m.SpColorHandle as any),
  { ssr }
);

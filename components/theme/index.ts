import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Theme } from '@spectrum-web-components/theme';

const ssr = false;

export const SpTheme = dynamic<Theme | { children?: ReactNode }>(
  () => import('./Theme').then((m) => m.SpTheme as any),
  { ssr }
);

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Divider } from '@spectrum-web-components/divider';

const ssr = false;

export const SpDivider = dynamic<Partial<Divider> | { children?: ReactNode }>(
  () => import('./Divider').then((m) => m.SpDivider as any),
  { ssr }
);

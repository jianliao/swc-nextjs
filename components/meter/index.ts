import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Meter } from '@spectrum-web-components/meter';

const ssr = false;

export const SpMeter = dynamic<Meter | { children?: ReactNode }>(
  () => import('./Meter').then((m) => m.SpMeter as any),
  { ssr }
);

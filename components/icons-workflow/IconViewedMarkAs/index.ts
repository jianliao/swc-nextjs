import dynamic from 'next/dynamic';

import { IconViewedMarkAs } from '@spectrum-web-components/icons-workflow/src/elements/IconViewedMarkAs.js';

export const SpIconViewedMarkAs = dynamic<Partial<IconViewedMarkAs> | { slot: string }>(
  () => import('./IconViewedMarkAs').then((m) => m.SpIconViewedMarkAs as any),
  { ssr: false }
);

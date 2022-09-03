import dynamic from 'next/dynamic';

import { IconGraphAreaStacked } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphAreaStacked.js';

export const SpIconGraphAreaStacked = dynamic<Partial<IconGraphAreaStacked> | { slot: string }>(
  () => import('./IconGraphAreaStacked').then((m) => m.SpIconGraphAreaStacked as any),
  { ssr: false}
);

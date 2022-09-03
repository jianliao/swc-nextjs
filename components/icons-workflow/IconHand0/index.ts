import dynamic from 'next/dynamic';

import { IconHand0 } from '@spectrum-web-components/icons-workflow/src/elements/IconHand0.js';

export const SpIconHand0 = dynamic<Partial<IconHand0> | { slot: string }>(
  () => import('./IconHand0').then((m) => m.SpIconHand0 as any),
  { ssr: false}
);

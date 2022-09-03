import dynamic from 'next/dynamic';

import { IconHand3 } from '@spectrum-web-components/icons-workflow/src/elements/IconHand3.js';

export const SpIconHand3 = dynamic<Partial<IconHand3> | { slot: string }>(
  () => import('./IconHand3').then((m) => m.SpIconHand3 as any),
  { ssr: false}
);

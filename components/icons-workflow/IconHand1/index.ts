import dynamic from 'next/dynamic';

import { IconHand1 } from '@spectrum-web-components/icons-workflow/src/elements/IconHand1.js';

export const SpIconHand1 = dynamic<IconHand1 | { slot: string }>(
  () => import('./IconHand1').then((m) => m.SpIconHand1 as any),
  { ssr: false }
);

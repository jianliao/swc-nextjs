import dynamic from 'next/dynamic';

import { IconHand4 } from '@spectrum-web-components/icons-workflow/src/elements/IconHand4.js';

export const SpIconHand4 = dynamic<IconHand4 | { slot: string }>(
  () => import('./IconHand4').then((m) => m.SpIconHand4 as any),
  { ssr: false}
);

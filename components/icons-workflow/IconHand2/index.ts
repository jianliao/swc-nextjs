import dynamic from 'next/dynamic';

import { IconHand2 } from '@spectrum-web-components/icons-workflow/src/elements/IconHand2.js';

export const SpIconHand2 = dynamic<Partial<IconHand2> | { slot: string }>(
  () => import('./IconHand2').then((m) => m.SpIconHand2 as any),
  { ssr: false}
);

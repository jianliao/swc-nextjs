import dynamic from 'next/dynamic';

import { IconHand } from '@spectrum-web-components/icons-workflow/src/elements/IconHand.js';

export const SpIconHand = dynamic<Partial<IconHand> | { slot: string }>(
  () => import('./IconHand').then((m) => m.SpIconHand as any),
  { ssr: false}
);

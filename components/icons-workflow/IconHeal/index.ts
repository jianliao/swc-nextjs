import dynamic from 'next/dynamic';

import { IconHeal } from '@spectrum-web-components/icons-workflow/src/elements/IconHeal.js';

export const SpIconHeal = dynamic<IconHeal | { slot: string }>(
  () => import('./IconHeal').then((m) => m.SpIconHeal as any),
  { ssr: false}
);

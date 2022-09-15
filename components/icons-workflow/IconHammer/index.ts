import dynamic from 'next/dynamic';

import { IconHammer } from '@spectrum-web-components/icons-workflow/src/elements/IconHammer.js';

export const SpIconHammer = dynamic<Partial<IconHammer> | { slot: string }>(
  () => import('./IconHammer').then((m) => m.SpIconHammer as any),
  { ssr: false }
);

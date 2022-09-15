import dynamic from 'next/dynamic';

import { IconGraphPathing } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphPathing.js';

export const SpIconGraphPathing = dynamic<Partial<IconGraphPathing> | { slot: string }>(
  () => import('./IconGraphPathing').then((m) => m.SpIconGraphPathing as any),
  { ssr: false }
);

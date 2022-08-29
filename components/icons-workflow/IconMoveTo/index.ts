import dynamic from 'next/dynamic';

import { IconMoveTo } from '@spectrum-web-components/icons-workflow/src/elements/IconMoveTo.js';

export const SpIconMoveTo = dynamic<IconMoveTo | { slot: string }>(
  () => import('./IconMoveTo').then((m) => m.SpIconMoveTo as any),
  { ssr: false }
);

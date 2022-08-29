import dynamic from 'next/dynamic';

import { IconForward } from '@spectrum-web-components/icons-workflow/src/elements/IconForward.js';

export const SpIconForward = dynamic<IconForward | { slot: string }>(
  () => import('./IconForward').then((m) => m.SpIconForward as any),
  { ssr: false}
);

import dynamic from 'next/dynamic';

import { IconForPlacementOnly } from '@spectrum-web-components/icons-workflow/src/elements/IconForPlacementOnly.js';

export const SpIconForPlacementOnly = dynamic<IconForPlacementOnly | { slot: string }>(
  () => import('./IconForPlacementOnly').then((m) => m.SpIconForPlacementOnly as any),
  { ssr: false }
);

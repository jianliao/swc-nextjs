import dynamic from 'next/dynamic';

import { IconLayersForward } from '@spectrum-web-components/icons-workflow/src/elements/IconLayersForward.js';

export const SpIconLayersForward = dynamic<Partial<IconLayersForward> | { slot: string }>(
  () => import('./IconLayersForward').then((m) => m.SpIconLayersForward as any),
  { ssr: false }
);

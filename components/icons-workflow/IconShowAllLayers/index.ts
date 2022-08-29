import dynamic from 'next/dynamic';

import { IconShowAllLayers } from '@spectrum-web-components/icons-workflow/src/elements/IconShowAllLayers.js';

export const SpIconShowAllLayers = dynamic<IconShowAllLayers | { slot: string }>(
  () => import('./IconShowAllLayers').then((m) => m.SpIconShowAllLayers as any),
  { ssr: false }
);

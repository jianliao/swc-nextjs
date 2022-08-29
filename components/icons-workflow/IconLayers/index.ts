import dynamic from 'next/dynamic';

import { IconLayers } from '@spectrum-web-components/icons-workflow/src/elements/IconLayers.js';

export const SpIconLayers = dynamic<IconLayers | { slot: string }>(
  () => import('./IconLayers').then((m) => m.SpIconLayers as any),
  { ssr: false }
);

import dynamic from 'next/dynamic';

import { IconShowOneLayer } from '@spectrum-web-components/icons-workflow/src/elements/IconShowOneLayer.js';

export const SpIconShowOneLayer = dynamic<IconShowOneLayer | { slot: string }>(
  () => import('./IconShowOneLayer').then((m) => m.SpIconShowOneLayer as any),
  { ssr: false }
);

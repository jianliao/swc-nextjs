import dynamic from 'next/dynamic';

import { IconLayersBringToFront } from '@spectrum-web-components/icons-workflow/src/elements/IconLayersBringToFront.js';

export const SpIconLayersBringToFront = dynamic<Partial<IconLayersBringToFront> | { slot: string }>(
  () => import('./IconLayersBringToFront').then((m) => m.SpIconLayersBringToFront as any),
  { ssr: false }
);

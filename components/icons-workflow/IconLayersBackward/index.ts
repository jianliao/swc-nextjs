import dynamic from 'next/dynamic';

import { IconLayersBackward } from '@spectrum-web-components/icons-workflow/src/elements/IconLayersBackward.js';

export const SpIconLayersBackward = dynamic<IconLayersBackward | { slot: string }>(
  () => import('./IconLayersBackward').then((m) => m.SpIconLayersBackward as any),
  { ssr: false}
);

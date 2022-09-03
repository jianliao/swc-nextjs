import dynamic from 'next/dynamic';

import { IconLayersSendToBack } from '@spectrum-web-components/icons-workflow/src/elements/IconLayersSendToBack.js';

export const SpIconLayersSendToBack = dynamic<Partial<IconLayersSendToBack> | { slot: string }>(
  () => import('./IconLayersSendToBack').then((m) => m.SpIconLayersSendToBack as any),
  { ssr: false}
);

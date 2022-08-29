import dynamic from 'next/dynamic';

import { IconAssetCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconAssetCheck.js';

export const SpIconAssetCheck = dynamic<IconAssetCheck | { slot: string }>(
  () => import('./IconAssetCheck').then((m) => m.SpIconAssetCheck as any),
  { ssr: false}
);

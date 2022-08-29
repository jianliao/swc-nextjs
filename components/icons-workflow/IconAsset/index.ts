import dynamic from 'next/dynamic';

import { IconAsset } from '@spectrum-web-components/icons-workflow/src/elements/IconAsset.js';

export const SpIconAsset = dynamic<IconAsset | { slot: string }>(
  () => import('./IconAsset').then((m) => m.SpIconAsset as any),
  { ssr: false}
);

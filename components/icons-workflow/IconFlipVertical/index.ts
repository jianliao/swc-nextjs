import dynamic from 'next/dynamic';

import { IconFlipVertical } from '@spectrum-web-components/icons-workflow/src/elements/IconFlipVertical.js';

export const SpIconFlipVertical = dynamic<IconFlipVertical | { slot: string }>(
  () => import('./IconFlipVertical').then((m) => m.SpIconFlipVertical as any),
  { ssr: false }
);

import dynamic from 'next/dynamic';

import { IconFlipHorizontal } from '@spectrum-web-components/icons-workflow/src/elements/IconFlipHorizontal.js';

export const SpIconFlipHorizontal = dynamic<IconFlipHorizontal | { slot: string }>(
  () => import('./IconFlipHorizontal').then((m) => m.SpIconFlipHorizontal as any),
  { ssr: false}
);

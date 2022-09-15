import dynamic from 'next/dynamic';

import { IconFlashOn } from '@spectrum-web-components/icons-workflow/src/elements/IconFlashOn.js';

export const SpIconFlashOn = dynamic<Partial<IconFlashOn> | { slot: string }>(
  () => import('./IconFlashOn').then((m) => m.SpIconFlashOn as any),
  { ssr: false }
);

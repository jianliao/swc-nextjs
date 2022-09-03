import dynamic from 'next/dynamic';

import { IconFlashlight } from '@spectrum-web-components/icons-workflow/src/elements/IconFlashlight.js';

export const SpIconFlashlight = dynamic<Partial<IconFlashlight> | { slot: string }>(
  () => import('./IconFlashlight').then((m) => m.SpIconFlashlight as any),
  { ssr: false}
);

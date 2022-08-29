import dynamic from 'next/dynamic';

import { IconFlashlightOn } from '@spectrum-web-components/icons-workflow/src/elements/IconFlashlightOn.js';

export const SpIconFlashlightOn = dynamic<IconFlashlightOn | { slot: string }>(
  () => import('./IconFlashlightOn').then((m) => m.SpIconFlashlightOn as any),
  { ssr: false}
);

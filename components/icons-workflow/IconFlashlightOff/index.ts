import dynamic from 'next/dynamic';

import { IconFlashlightOff } from '@spectrum-web-components/icons-workflow/src/elements/IconFlashlightOff.js';

export const SpIconFlashlightOff = dynamic<Partial<IconFlashlightOff> | { slot: string }>(
  () => import('./IconFlashlightOff').then((m) => m.SpIconFlashlightOff as any),
  { ssr: false }
);

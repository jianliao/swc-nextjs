import dynamic from 'next/dynamic';

import { IconFlashOff } from '@spectrum-web-components/icons-workflow/src/elements/IconFlashOff.js';

export const SpIconFlashOff = dynamic<Partial<IconFlashOff> | { slot: string }>(
  () => import('./IconFlashOff').then((m) => m.SpIconFlashOff as any),
  { ssr: false}
);

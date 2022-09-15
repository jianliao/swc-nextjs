import dynamic from 'next/dynamic';

import { IconFlashAuto } from '@spectrum-web-components/icons-workflow/src/elements/IconFlashAuto.js';

export const SpIconFlashAuto = dynamic<Partial<IconFlashAuto> | { slot: string }>(
  () => import('./IconFlashAuto').then((m) => m.SpIconFlashAuto as any),
  { ssr: false }
);

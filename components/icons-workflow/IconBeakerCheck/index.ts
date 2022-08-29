import dynamic from 'next/dynamic';

import { IconBeakerCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconBeakerCheck.js';

export const SpIconBeakerCheck = dynamic<IconBeakerCheck | { slot: string }>(
  () => import('./IconBeakerCheck').then((m) => m.SpIconBeakerCheck as any),
  { ssr: false}
);

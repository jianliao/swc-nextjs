import dynamic from 'next/dynamic';

import { IconClockCheck } from '@spectrum-web-components/icons-workflow/src/elements/IconClockCheck.js';

export const SpIconClockCheck = dynamic<Partial<IconClockCheck> | { slot: string }>(
  () => import('./IconClockCheck').then((m) => m.SpIconClockCheck as any),
  { ssr: false }
);

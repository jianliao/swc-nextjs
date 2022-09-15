import dynamic from 'next/dynamic';

import { IconEmailSchedule } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailSchedule.js';

export const SpIconEmailSchedule = dynamic<Partial<IconEmailSchedule> | { slot: string }>(
  () => import('./IconEmailSchedule').then((m) => m.SpIconEmailSchedule as any),
  { ssr: false }
);

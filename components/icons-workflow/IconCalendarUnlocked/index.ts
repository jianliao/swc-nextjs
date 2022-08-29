import dynamic from 'next/dynamic';

import { IconCalendarUnlocked } from '@spectrum-web-components/icons-workflow/src/elements/IconCalendarUnlocked.js';

export const SpIconCalendarUnlocked = dynamic<IconCalendarUnlocked | { slot: string }>(
  () => import('./IconCalendarUnlocked').then((m) => m.SpIconCalendarUnlocked as any),
  { ssr: false }
);

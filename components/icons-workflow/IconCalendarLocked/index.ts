import dynamic from 'next/dynamic';

import { IconCalendarLocked } from '@spectrum-web-components/icons-workflow/src/elements/IconCalendarLocked.js';

export const SpIconCalendarLocked = dynamic<Partial<IconCalendarLocked> | { slot: string }>(
  () => import('./IconCalendarLocked').then((m) => m.SpIconCalendarLocked as any),
  { ssr: false}
);

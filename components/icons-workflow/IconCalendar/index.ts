import dynamic from 'next/dynamic';

import { IconCalendar } from '@spectrum-web-components/icons-workflow/src/elements/IconCalendar.js';

export const SpIconCalendar = dynamic<Partial<IconCalendar> | { slot: string }>(
  () => import('./IconCalendar').then((m) => m.SpIconCalendar as any),
  { ssr: false}
);

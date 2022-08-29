import dynamic from 'next/dynamic';

import { IconCalendarAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconCalendarAdd.js';

export const SpIconCalendarAdd = dynamic<IconCalendarAdd | { slot: string }>(
  () => import('./IconCalendarAdd').then((m) => m.SpIconCalendarAdd as any),
  { ssr: false }
);

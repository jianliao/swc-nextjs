import dynamic from 'next/dynamic';

import { IconViewDay } from '@spectrum-web-components/icons-workflow/src/elements/IconViewDay.js';

export const SpIconViewDay = dynamic<Partial<IconViewDay> | { slot: string }>(
  () => import('./IconViewDay').then((m) => m.SpIconViewDay as any),
  { ssr: false}
);

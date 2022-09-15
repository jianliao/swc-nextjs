import dynamic from 'next/dynamic';

import { IconViewWeek } from '@spectrum-web-components/icons-workflow/src/elements/IconViewWeek.js';

export const SpIconViewWeek = dynamic<Partial<IconViewWeek> | { slot: string }>(
  () => import('./IconViewWeek').then((m) => m.SpIconViewWeek as any),
  { ssr: false }
);

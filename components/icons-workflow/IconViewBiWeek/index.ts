import dynamic from 'next/dynamic';

import { IconViewBiWeek } from '@spectrum-web-components/icons-workflow/src/elements/IconViewBiWeek.js';

export const SpIconViewBiWeek = dynamic<IconViewBiWeek | { slot: string }>(
  () => import('./IconViewBiWeek').then((m) => m.SpIconViewBiWeek as any),
  { ssr: false}
);

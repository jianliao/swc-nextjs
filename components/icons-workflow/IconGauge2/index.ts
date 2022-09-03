import dynamic from 'next/dynamic';

import { IconGauge2 } from '@spectrum-web-components/icons-workflow/src/elements/IconGauge2.js';

export const SpIconGauge2 = dynamic<Partial<IconGauge2> | { slot: string }>(
  () => import('./IconGauge2').then((m) => m.SpIconGauge2 as any),
  { ssr: false}
);

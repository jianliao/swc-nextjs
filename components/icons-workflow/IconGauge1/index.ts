import dynamic from 'next/dynamic';

import { IconGauge1 } from '@spectrum-web-components/icons-workflow/src/elements/IconGauge1.js';

export const SpIconGauge1 = dynamic<Partial<IconGauge1> | { slot: string }>(
  () => import('./IconGauge1').then((m) => m.SpIconGauge1 as any),
  { ssr: false}
);

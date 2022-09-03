import dynamic from 'next/dynamic';

import { IconGauge3 } from '@spectrum-web-components/icons-workflow/src/elements/IconGauge3.js';

export const SpIconGauge3 = dynamic<Partial<IconGauge3> | { slot: string }>(
  () => import('./IconGauge3').then((m) => m.SpIconGauge3 as any),
  { ssr: false}
);

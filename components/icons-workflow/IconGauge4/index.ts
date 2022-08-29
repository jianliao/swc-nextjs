import dynamic from 'next/dynamic';

import { IconGauge4 } from '@spectrum-web-components/icons-workflow/src/elements/IconGauge4.js';

export const SpIconGauge4 = dynamic<IconGauge4 | { slot: string }>(
  () => import('./IconGauge4').then((m) => m.SpIconGauge4 as any),
  { ssr: false }
);

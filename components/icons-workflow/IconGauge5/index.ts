import dynamic from 'next/dynamic';

import { IconGauge5 } from '@spectrum-web-components/icons-workflow/src/elements/IconGauge5.js';

export const SpIconGauge5 = dynamic<IconGauge5 | { slot: string }>(
  () => import('./IconGauge5').then((m) => m.SpIconGauge5 as any),
  { ssr: false }
);

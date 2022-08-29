import dynamic from 'next/dynamic';

import { IconGraphProfitCurve } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphProfitCurve.js';

export const SpIconGraphProfitCurve = dynamic<IconGraphProfitCurve | { slot: string }>(
  () => import('./IconGraphProfitCurve').then((m) => m.SpIconGraphProfitCurve as any),
  { ssr: false}
);

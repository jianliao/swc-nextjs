import dynamic from 'next/dynamic';

import { IconGraphTrend } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphTrend.js';

export const SpIconGraphTrend = dynamic<IconGraphTrend | { slot: string }>(
  () => import('./IconGraphTrend').then((m) => m.SpIconGraphTrend as any),
  { ssr: false}
);

import dynamic from 'next/dynamic';

import { IconFileChart } from '@spectrum-web-components/icons-workflow/src/elements/IconFileChart.js';

export const SpIconFileChart = dynamic<Partial<IconFileChart> | { slot: string }>(
  () => import('./IconFileChart').then((m) => m.SpIconFileChart as any),
  { ssr: false }
);

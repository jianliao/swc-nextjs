import dynamic from 'next/dynamic';

import { IconTableAndChart } from '@spectrum-web-components/icons-workflow/src/elements/IconTableAndChart.js';

export const SpIconTableAndChart = dynamic<Partial<IconTableAndChart> | { slot: string }>(
  () => import('./IconTableAndChart').then((m) => m.SpIconTableAndChart as any),
  { ssr: false }
);

import dynamic from 'next/dynamic';

import { IconSuccessMetric } from '@spectrum-web-components/icons-workflow/src/elements/IconSuccessMetric.js';

export const SpIconSuccessMetric = dynamic<Partial<IconSuccessMetric> | { slot: string }>(
  () => import('./IconSuccessMetric').then((m) => m.SpIconSuccessMetric as any),
  { ssr: false }
);

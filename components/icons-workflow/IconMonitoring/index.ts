import dynamic from 'next/dynamic';

import { IconMonitoring } from '@spectrum-web-components/icons-workflow/src/elements/IconMonitoring.js';

export const SpIconMonitoring = dynamic<Partial<IconMonitoring> | { slot: string }>(
  () => import('./IconMonitoring').then((m) => m.SpIconMonitoring as any),
  { ssr: false}
);

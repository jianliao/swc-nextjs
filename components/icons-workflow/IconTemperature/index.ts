import dynamic from 'next/dynamic';

import { IconTemperature } from '@spectrum-web-components/icons-workflow/src/elements/IconTemperature.js';

export const SpIconTemperature = dynamic<Partial<IconTemperature> | { slot: string }>(
  () => import('./IconTemperature').then((m) => m.SpIconTemperature as any),
  { ssr: false }
);

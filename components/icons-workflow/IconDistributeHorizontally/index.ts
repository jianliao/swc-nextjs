import dynamic from 'next/dynamic';

import { IconDistributeHorizontally } from '@spectrum-web-components/icons-workflow/src/elements/IconDistributeHorizontally.js';

export const SpIconDistributeHorizontally = dynamic<Partial<IconDistributeHorizontally> | { slot: string }>(
  () => import('./IconDistributeHorizontally').then((m) => m.SpIconDistributeHorizontally as any),
  { ssr: false}
);

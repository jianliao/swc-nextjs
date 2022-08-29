import dynamic from 'next/dynamic';

import { IconHistory } from '@spectrum-web-components/icons-workflow/src/elements/IconHistory.js';

export const SpIconHistory = dynamic<IconHistory | { slot: string }>(
  () => import('./IconHistory').then((m) => m.SpIconHistory as any),
  { ssr: false}
);

import dynamic from 'next/dynamic';

import { IconDistributeVertically } from '@spectrum-web-components/icons-workflow/src/elements/IconDistributeVertically.js';

export const SpIconDistributeVertically = dynamic<IconDistributeVertically | { slot: string }>(
  () => import('./IconDistributeVertically').then((m) => m.SpIconDistributeVertically as any),
  { ssr: false}
);

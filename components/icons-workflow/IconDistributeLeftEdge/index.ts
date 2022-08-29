import dynamic from 'next/dynamic';

import { IconDistributeLeftEdge } from '@spectrum-web-components/icons-workflow/src/elements/IconDistributeLeftEdge.js';

export const SpIconDistributeLeftEdge = dynamic<IconDistributeLeftEdge | { slot: string }>(
  () => import('./IconDistributeLeftEdge').then((m) => m.SpIconDistributeLeftEdge as any),
  { ssr: false}
);

import dynamic from 'next/dynamic';

import { IconDistributeTopEdge } from '@spectrum-web-components/icons-workflow/src/elements/IconDistributeTopEdge.js';

export const SpIconDistributeTopEdge = dynamic<Partial<IconDistributeTopEdge> | { slot: string }>(
  () => import('./IconDistributeTopEdge').then((m) => m.SpIconDistributeTopEdge as any),
  { ssr: false }
);

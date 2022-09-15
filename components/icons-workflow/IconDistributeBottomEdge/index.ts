import dynamic from 'next/dynamic';

import { IconDistributeBottomEdge } from '@spectrum-web-components/icons-workflow/src/elements/IconDistributeBottomEdge.js';

export const SpIconDistributeBottomEdge = dynamic<
  Partial<IconDistributeBottomEdge> | { slot: string }
>(() => import('./IconDistributeBottomEdge').then((m) => m.SpIconDistributeBottomEdge as any), {
  ssr: false,
});

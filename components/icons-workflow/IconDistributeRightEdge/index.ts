import dynamic from 'next/dynamic';

import { IconDistributeRightEdge } from '@spectrum-web-components/icons-workflow/src/elements/IconDistributeRightEdge.js';

export const SpIconDistributeRightEdge = dynamic<
  Partial<IconDistributeRightEdge> | { slot: string }
>(() => import('./IconDistributeRightEdge').then((m) => m.SpIconDistributeRightEdge as any), {
  ssr: false,
});

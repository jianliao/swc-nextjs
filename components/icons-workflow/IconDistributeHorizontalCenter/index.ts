import dynamic from 'next/dynamic';

import { IconDistributeHorizontalCenter } from '@spectrum-web-components/icons-workflow/src/elements/IconDistributeHorizontalCenter.js';

export const SpIconDistributeHorizontalCenter = dynamic<IconDistributeHorizontalCenter | { slot: string }>(
  () => import('./IconDistributeHorizontalCenter').then((m) => m.SpIconDistributeHorizontalCenter as any),
  { ssr: false}
);

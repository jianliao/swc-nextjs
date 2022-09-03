import dynamic from 'next/dynamic';

import { IconDistributeVerticalCenter } from '@spectrum-web-components/icons-workflow/src/elements/IconDistributeVerticalCenter.js';

export const SpIconDistributeVerticalCenter = dynamic<Partial<IconDistributeVerticalCenter> | { slot: string }>(
  () => import('./IconDistributeVerticalCenter').then((m) => m.SpIconDistributeVerticalCenter as any),
  { ssr: false}
);

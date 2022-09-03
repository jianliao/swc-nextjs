import dynamic from 'next/dynamic';

import { IconOpenRecentOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconOpenRecentOutline.js';

export const SpIconOpenRecentOutline = dynamic<Partial<IconOpenRecentOutline> | { slot: string }>(
  () => import('./IconOpenRecentOutline').then((m) => m.SpIconOpenRecentOutline as any),
  { ssr: false}
);

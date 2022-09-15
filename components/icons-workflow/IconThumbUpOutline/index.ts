import dynamic from 'next/dynamic';

import { IconThumbUpOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconThumbUpOutline.js';

export const SpIconThumbUpOutline = dynamic<Partial<IconThumbUpOutline> | { slot: string }>(
  () => import('./IconThumbUpOutline').then((m) => m.SpIconThumbUpOutline as any),
  { ssr: false }
);

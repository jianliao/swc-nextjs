import dynamic from 'next/dynamic';

import { IconThumbDownOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconThumbDownOutline.js';

export const SpIconThumbDownOutline = dynamic<Partial<IconThumbDownOutline> | { slot: string }>(
  () => import('./IconThumbDownOutline').then((m) => m.SpIconThumbDownOutline as any),
  { ssr: false}
);

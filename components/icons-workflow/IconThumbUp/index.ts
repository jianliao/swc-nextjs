import dynamic from 'next/dynamic';

import { IconThumbUp } from '@spectrum-web-components/icons-workflow/src/elements/IconThumbUp.js';

export const SpIconThumbUp = dynamic<Partial<IconThumbUp> | { slot: string }>(
  () => import('./IconThumbUp').then((m) => m.SpIconThumbUp as any),
  { ssr: false}
);

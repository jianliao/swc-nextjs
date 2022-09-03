import dynamic from 'next/dynamic';

import { IconHeart } from '@spectrum-web-components/icons-workflow/src/elements/IconHeart.js';

export const SpIconHeart = dynamic<Partial<IconHeart> | { slot: string }>(
  () => import('./IconHeart').then((m) => m.SpIconHeart as any),
  { ssr: false}
);

import dynamic from 'next/dynamic';

import { IconFilterHeart } from '@spectrum-web-components/icons-workflow/src/elements/IconFilterHeart.js';

export const SpIconFilterHeart = dynamic<IconFilterHeart | { slot: string }>(
  () => import('./IconFilterHeart').then((m) => m.SpIconFilterHeart as any),
  { ssr: false}
);

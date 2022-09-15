import dynamic from 'next/dynamic';

import { IconStarOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconStarOutline.js';

export const SpIconStarOutline = dynamic<Partial<IconStarOutline> | { slot: string }>(
  () => import('./IconStarOutline').then((m) => m.SpIconStarOutline as any),
  { ssr: false }
);

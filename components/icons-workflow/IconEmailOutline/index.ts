import dynamic from 'next/dynamic';

import { IconEmailOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailOutline.js';

export const SpIconEmailOutline = dynamic<Partial<IconEmailOutline> | { slot: string }>(
  () => import('./IconEmailOutline').then((m) => m.SpIconEmailOutline as any),
  { ssr: false }
);

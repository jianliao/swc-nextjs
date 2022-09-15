import dynamic from 'next/dynamic';

import { IconShare } from '@spectrum-web-components/icons-workflow/src/elements/IconShare.js';

export const SpIconShare = dynamic<Partial<IconShare> | { slot: string }>(
  () => import('./IconShare').then((m) => m.SpIconShare as any),
  { ssr: false }
);

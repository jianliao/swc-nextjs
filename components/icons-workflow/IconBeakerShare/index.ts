import dynamic from 'next/dynamic';

import { IconBeakerShare } from '@spectrum-web-components/icons-workflow/src/elements/IconBeakerShare.js';

export const SpIconBeakerShare = dynamic<Partial<IconBeakerShare> | { slot: string }>(
  () => import('./IconBeakerShare').then((m) => m.SpIconBeakerShare as any),
  { ssr: false }
);

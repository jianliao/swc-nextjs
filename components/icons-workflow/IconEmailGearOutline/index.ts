import dynamic from 'next/dynamic';

import { IconEmailGearOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconEmailGearOutline.js';

export const SpIconEmailGearOutline = dynamic<Partial<IconEmailGearOutline> | { slot: string }>(
  () => import('./IconEmailGearOutline').then((m) => m.SpIconEmailGearOutline as any),
  { ssr: false }
);

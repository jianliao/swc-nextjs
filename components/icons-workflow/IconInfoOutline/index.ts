import dynamic from 'next/dynamic';

import { IconInfoOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconInfoOutline.js';

export const SpIconInfoOutline = dynamic<Partial<IconInfoOutline> | { slot: string }>(
  () => import('./IconInfoOutline').then((m) => m.SpIconInfoOutline as any),
  { ssr: false }
);

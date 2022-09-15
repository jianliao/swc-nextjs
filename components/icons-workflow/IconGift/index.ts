import dynamic from 'next/dynamic';

import { IconGift } from '@spectrum-web-components/icons-workflow/src/elements/IconGift.js';

export const SpIconGift = dynamic<Partial<IconGift> | { slot: string }>(
  () => import('./IconGift').then((m) => m.SpIconGift as any),
  { ssr: false }
);

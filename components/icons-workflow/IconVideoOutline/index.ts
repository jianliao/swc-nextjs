import dynamic from 'next/dynamic';

import { IconVideoOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconVideoOutline.js';

export const SpIconVideoOutline = dynamic<Partial<IconVideoOutline> | { slot: string }>(
  () => import('./IconVideoOutline').then((m) => m.SpIconVideoOutline as any),
  { ssr: false }
);

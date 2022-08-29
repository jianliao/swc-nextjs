import dynamic from 'next/dynamic';

import { IconRotateLeftOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconRotateLeftOutline.js';

export const SpIconRotateLeftOutline = dynamic<IconRotateLeftOutline | { slot: string }>(
  () => import('./IconRotateLeftOutline').then((m) => m.SpIconRotateLeftOutline as any),
  { ssr: false}
);

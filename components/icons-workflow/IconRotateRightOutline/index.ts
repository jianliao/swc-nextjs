import dynamic from 'next/dynamic';

import { IconRotateRightOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconRotateRightOutline.js';

export const SpIconRotateRightOutline = dynamic<IconRotateRightOutline | { slot: string }>(
  () => import('./IconRotateRightOutline').then((m) => m.SpIconRotateRightOutline as any),
  { ssr: false }
);
